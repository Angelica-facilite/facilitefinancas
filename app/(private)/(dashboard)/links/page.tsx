"use client";
import { LinkGrid } from "@/components/link-grid"
import { PreviewMobile } from "@/components/preview-mobile"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { baseUrl } from "../emails/linksColumns"
import { LinkForm } from "./links-form"
import DialogForms from "@/components/dialogForms";
import { v4 as uuidv4 } from 'uuid'
import { LinkProps } from "./type";

const initialLinks = [
  {
    id: uuidv4(),
    index: 0,
    title: "Mentoria Posicionamento Digital",
    url: "https://exemplo.com/mentoria",
    active: true,
    clicks: 0,
    image: baseUrl
  },
  {
    index: 1,
    id: uuidv4(),
    title: "ChatGPT - Linha Editorial Prime",
    url: "https://exemplo.com/chatgpt",
    active: true,
    clicks: 5,
    starred: true,
  },
  {
    index: 2,
    id: uuidv4(),
    title: "Curso de Marketing Digital",
    url: "https://exemplo.com/curso",
    active: true,
    clicks: 3,
  },
]

export default function LinksPage() {
  const [links, setLinks] = useState<LinkProps[]>(initialLinks)
  const [editLink, setEditLink] = useState<LinkProps | null>(null)
  const [linksAdd, setLinksAdd] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    toast("Link copiado para a área de transferência")
  }

  const handleLinksChange = (items: any) => {
    setLinks(items);
  }

  const handleAddLink = (link: LinkProps) => {
    if(editLink){
      const editedLinks = links.map(li => {
        
        if(li.id === link.id){
          return link
        }
        return li
      })
      setEditLink(null)
      setLinks(editedLinks)

    }else{
      const newLink = {
        ...link,       
        index: links.length - 1
      }
      setLinks(old => [...old, newLink])
    }


  }

  const handleEdit = (link: LinkProps) => {
    setEditLink(link)
    setOpenDialog(true)
  }

  const handleDelete = (linkId:string) => {
    const removeLink = links.filter(link => link.id !== linkId)
    setLinks(removeLink)
  }

  return (
    <div className="flex space-y-6 p-8">
      <div className="flex flex-col w-full  max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Meus Links</h2>

          <Button onClick={() => setOpenDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Link
          </Button>

        </div>

        <div className="flex md:flex-row flex-col items-center gap-4 p-4 rounded-lg bg-muted mb-8">
          <div className="flex-1">
            <h3 className="font-medium">Link do seu perfil</h3>
            <p className="text-sm text-muted-foreground">https://www.facilitefinancas.com.br/links-da-bio</p>
          </div>
          <Button variant="secondary" size="sm" onClick={() => copyUrl('www.facilitefinancas.com.br/links-da-bio')}>
            Copiar
          </Button>
        </div>


        {/* {linksAdd && <LinkForm onSubmitForm={(item) => handleAddLink(item)} />} */}

        <DialogForms open={openDialog} onOpenChange={setOpenDialog}>
          <LinkForm
            close={() => setOpenDialog(false)}
            onSubmitForm={(item) => handleAddLink(item)}
            edit = {editLink} 

          />

        </DialogForms>

        <LinkGrid
          links={links}
          onLinksChange={(items: any) => handleLinksChange(items)}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <PreviewMobile links={links} />
    </div>
  )
}

