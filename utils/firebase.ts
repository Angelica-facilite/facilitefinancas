 import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence,
    browserLocalPersistence,
    inMemoryPersistence,
    signInWithEmailAndPassword,

} from "firebase/auth"
import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    increment,
    setDoc,
    getDoc,
    getDocs,
    where,
    doc,
    query,
    deleteDoc
} from "firebase/firestore"

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
// Initialize Firebase
// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.PUBLIC_PROJECT_ID,
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  
  const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage();


export const API = {
    loginWithGoogle: async () => {
        const provider = new GoogleAuthProvider()
        try {
            // Configurar a persistência do navegador local
            await setPersistence(auth, browserLocalPersistence)

            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const { displayName, email, photoURL, uid } = user
            const userData = {
                name: displayName,
                email,
                image: photoURL,
                uid

            }


            // Verificar se o usuário já existe no Firestore           
            const userDocRef = doc(db, "users", uid)
            const userDoc = await getDoc(userDocRef)
            let isNewUser = false
            if (!userDoc.exists()) {
                isNewUser = true
                // Adicionar novo usuário ao Firestore
                // const docRef = await addDoc(collection(db, "users"), userData);
            }

            if (isNewUser) {
                
                const docRef = await setDoc(userDocRef, userData)
                return {
                    user: userData,
                    loggedIn: true
                }
            }

            return {
                user: userDoc.data(),
                loggedIn: true
            };
        } catch (error) {
            return { error, loggedIn: false }
        }
    },

    signInWithEmailAndPassword: async (email, password) => {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in 

                    const user = userCredential.user
                    const userDocRef = doc(db, "users", user.uid)
                    const userDoc = await getDoc(userDocRef)
                    //console.log(user)
                    resolve({ ...userDoc.data(), id: user.uid, email: user.email })
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(error)
                    if (errorCode === 'auth/user-not-found') {
                        reject({ logged: false, message: 'Usuario não encontrado.' })
                    }
                    if (errorCode === 'auth/invalid-emal') {
                        reject({ logged: false, message: 'E-mail inválida.' })
                    }
                    if (errorCode === 'auth/wrong-password') {
                        reject({ logged: false, message: 'Senha inválida.' })
                    }
                    reject({ logged: false, message: 'E-mail ou Senha inválida.' })

                })
        })
    },

    checkLoggedIn: () => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const { uid } = user;
                    const userDocRef = doc(db, "users", uid)
                    const userDoc = await getDoc(userDocRef)
                    resolve({
                        user: userDoc.data(), loggedIn: true
                    });
                } else {
                    resolve({ loggedIn: false });
                }
            });
        })
    },

    addEmail: (data, lng) => {
        return new Promise(async (resolve, reject) => {
            addDoc(collection(db, "marketing", lng, "emails"), data).then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            })
        })
    },
 

 
    getAllLinks: async () => {
        try {
            const linksCollection = collection(db, 'links')
            const linksSnapshot = await getDocs(linksCollection)

            let alllinks = linksSnapshot.docs.map(vocaby => ({
                ...vocaby.data(),
                id: vocaby.id,
            }))

            return alllinks
        } catch (error) {
            console.error("Error fetching links documents: ", error)
            throw error
        }
    },

    addLink: (data) => {
        return new Promise(async (resolve, reject) => {
            addDoc(collection(db, "links"), data).then((doc) => {
                resolve(doc.id);
            }).catch(() => {
                reject(false);
            })
        })
    },
 

    updateLink: (data) => {
        return new Promise(async (resolve, reject) => {
            const uDoc = doc(db, 'links', data.id)
            updateDoc(uDoc, data).then(() => {
                resolve(true)
            }).catch(err => {
                console.log(err)
                reject(err)

            })
        })
    },

    deleteLink: async (id) => {
        return new Promise(async (resolve, reject) => {
            const leadDoc = doc(db, 'links', id)
            deleteDoc(leadDoc).then(() => {
                resolve(true)
            }).catch(error => {
                reject(error)
            })
            return true
        })
    },
 
 
    addCredit: (uid, qtd) => {
        return new Promise(async (resolve) => {
            const uDoc = doc(db, 'users', uid)
            updateDoc(uDoc, {
                credits: increment(qtd)
            }).then(() => {
                resolve(true)
            })
        })
    },


    updateDoc: (uid, data) => {
        return new Promise(async (resolve) => {
            const uDoc = doc(db, 'users', uid)
            updateDoc(uDoc, data).then(() => {
                resolve(true)
            }).catch(err => {
                console.log(err)
            })
        })
    },


    whereUser: (scId) => {
        return new Promise(async (resolve) => {
            const q = query(collection(db, "users"), where("stripeCustumerid", "==", scId))
            let uid = null
            getDocs(q)
                .then(querySnapshot => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        let data = doc.data()
                        if (data.stripeCustumerid === scId) {
                            uid = data.uid
                        }
                    })
                    if (uid) {
                        resolve(uid)
                    } else {

                        resolve(false)
                    }
                }).catch(err => {
                    console.log(err)

                })
        })
    },


    getAllEmailsLeads: async () => {
        try {
            const marketingCollection = collection(db, 'marketing')
            const marketingSnapshot = await getDocs(marketingCollection)

            let allEmailsByLang = {}

            for (const doc of marketingSnapshot.docs) {
                const lng = doc.id
                console.log(lng)
                const emailsCollection = collection(db, `marketing/${lng}/emails`)
                const emailsSnapshot = await getDocs(emailsCollection)

                const emails = emailsSnapshot.docs.map(emailDoc => ({
                    ...emailDoc.data(),
                    id: emailDoc.id,
                }))

                allEmailsByLang[lng] = emails
            }

            return allEmailsByLang
        } catch (error) {
            console.error("Error fetching documents: ", error)
            throw error
        }
    },

    deleteLead: async (lng, lId) => {
        return new Promise(async (resolve, reject) => {
            console.log(lng, '-', lId)
            const leadDoc = doc(db, 'marketing', lng, 'emails', lId)
            deleteDoc(leadDoc).then(() => {
                resolve(true)
            }).catch(error => {
                reject(error)
            })
            return true
        })
    },
    removeCredit: (uid, qtd) => {
        return new Promise(async (resolve,) => {

            const uDoc = doc(db, 'users', uid)
            updateDoc(uDoc, {
                credits: increment(-qtd)
            }).then(() => {
                resolve(true)
            })
        })
    },

    uploadImage: (data, folder) => {
        return new Promise(async (resolve, reject) => {
            const path = `images/${folder}/${data.uid}/${data.name}.jpg`
            const metadata = {contentType: 'image/jpeg'}
            const reference = ref(storage, path)
            const task = uploadBytesResumable(reference, data.uri, metadata)

            try {
                await task
                getDownloadURL(task.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                  });
            } catch (e) {
                console.error(e)
                reject(false)
            }

        })
    },

    signOut: () => {
        return signOut(auth)
    }
}