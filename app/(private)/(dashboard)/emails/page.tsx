"use client"

import { DataTable } from "@/components/data-table" 
import { useSidebar } from "@/components/ui/sidebar"
import { linksColumns, LinkType } from "./linksColumns"

const items: LinkType[] = [
  {
    id: "1",
    imageUrl:  "https://firebasestorage.googleapis.com/v0/b/racheldasilva-283f4.appspot.com/o/defaultLink.png?alt=media&token=3e9e3fde-e974-4dfb-9774-8a197dce2241",
    name: "john@example.com",
    url: "http://google.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    url: "http://google.com",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/racheldasilva-283f4.appspot.com/o/defaultLink.png?alt=media&token=3e9e3fde-e974-4dfb-9774-8a197dce2241"
  },
]


export default function Emails() {
  const { isMobile } = useSidebar()

  const handleDelete = (item: LinkType) => {
    console.log("Delete:", item)
  }

  const handleEdit = (item: LinkType) => {
    console.log("Edit:", item)
  }

  const handleCreate = () => {
    console.log("Create new item")
  }

  const handleReorder = (items: LinkType[]) => {
    console.log("New order:", items)
  }

  return (
    <div className="flex container mx-auto p-4 w-screen bg-red-300 ">
      {/* <DataTable<LinkType>
        data={items}
        searchKey="name"
        columns={linksColumns<LinkType>()} // Chame a função corretamente
        actions={{
          handleDelete,
          handleEdit,
          handleCreate,  
        }}
        onReorder={handleReorder}
        draggable={isMobile?false:true}
      /> */}

    </div>
  )
}

