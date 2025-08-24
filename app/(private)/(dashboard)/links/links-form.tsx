"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ImagePlus, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LinkProps, LinkSchema } from "./type";

import { v4 as uuidv4 } from 'uuid'
import { API } from "@/utils/firebase";
 

interface LinkFormProps { 
    edit?: LinkProps | null,
    close: () => void;
    onSubmitForm: (data:LinkProps) => void
}

export function LinkForm({onSubmitForm, edit, close}:LinkFormProps) { 
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const form = useForm<LinkProps>({
        resolver: zodResolver(LinkSchema),
        defaultValues: edit?edit: {
            title: "",
            url: "", 
            image: "", 
            id: uuidv4(),
            active: true,
            clicks: 0,
            
        },
    })

    useEffect(() =>{

        if(edit) {
            form.setValue('title', edit.title)
            form.setValue('url', edit.url)
            if(edit.image   ){
                setSelectedImage(edit.image);
                form.setValue('image', edit.image)

            }
        }

    },[]);

    const onSubmit = async (data: LinkProps) => {
        //SE TIVER IMAGEM MANDA PARA O BANCO DE DADOS
        const img = selectedImage ? await API.uploadImage({ uri: selectedImage, uid: uuidv4(), name: uuidv4() }, 'vocabulary') : false

        if(selectedImage ){
            onSubmitForm({
                ...data,
                image:selectedImage
            })

        }else{
            onSubmitForm({...data, image:''})
        }
        
        toast({
            title: "Link salvo com sucesso!",
            description: "O link foi salvo e já está disponível.",
        })
        form.reset()
        close()

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 bg-white p-4  rounded-md">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input placeholder="Título do link" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input type="url" placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field: { onChange } }) => (
                        <FormItem>
                            <FormLabel>Imagem</FormLabel>
                            <FormControl>
                                <Card>
                                    {selectedImage&&<CardHeader>
                                        <Button onClick={()=>{
                                            form.setValue('image', '')
                                            setSelectedImage(null)
                                        }} variant="outline" size="icon"  className=" ">
                                           X
                                        </Button>
                                    </CardHeader>}
                                    <CardContent className={cn("pt-6", selectedImage&&'pt-0 ')}>
                                        {selectedImage ? (
                                            <div className="relative w-full pb-[33.33%] bg-gray-400 rounded-sm ">
                                                <Image
                                                    src={selectedImage}
                                                    alt="Preview"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="absolute top-0 left-0 w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-10">
                                                <ImagePlus className="h-8 w-8 text-muted-foreground" />
                                                {edit&&edit.image}
                                            </div>
                                        )}
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            className="mt-2"
                                            id="file-upload" 
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setSelectedImage(reader.result as string);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                                onChange(file);
                                            }}
                                        />

                                    </CardContent>
                                </Card>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-theme-secondary">
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Salvar Link
                </Button>
            </form>
        </Form>
    )
}
