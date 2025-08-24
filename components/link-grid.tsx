"use client"
import { Copy, GripVertical, LinkIcon, MoreHorizontal, Pencil, Share2, Star, Trash } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { toast } from "sonner"
import Image from "next/image"
import { LinkProps } from "@/app/(private)/(dashboard)/links/type"

 


function SortableLink({
  link,
  onToggleActive,
  handleEdit,
  handleDelete,
}: {
  link: LinkProps
  onToggleActive: (id: string) => void
  handleEdit: (li: LinkProps) => void
  handleDelete: (id: string) => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: link.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    toast("Link copiado para a área de transferência")
  }

  return (
    <div ref={setNodeRef} style={style} className={isDragging ? "opacity-50" : ""}>
      <Card className="relative">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className=" ">

              <button
                className="        opacity-50 hover:opacity-100 cursor-grab active:cursor-grabbing touch-none"
                {...attributes}
                {...listeners}
              >
                <GripVertical className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 min-w-0 pl-8">
              <div className="flex items-center gap-2">
                <h3 className="font-medium truncate">{link.title}</h3>
                {/* {link.starred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />} */}
              </div>
              <p className="text-sm text-muted-foreground truncate">{link.url}</p>
            </div>

            <div className="flex items-center gap-2">
              {/* <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <LinkIcon className="h-4 w-4" />
                {link.clicks} clicks
              </div> */}
              <Switch checked={link.active} onCheckedChange={() => onToggleActive(link.id)} />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => copyUrl(link.url)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar URL
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>handleEdit(link)}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>handleDelete(link.id)} className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
        {link.image && <CardFooter>
          <div className="relative w-full pb-[33.33%] border-2 rounded-sm border-gray-400">
            <Image
              src={link.image}
              alt={link.title}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

        </CardFooter>}
      </Card>
    </div>
  )
}

interface LinkGridProps {
  links: LinkProps[]
  onLinksChange: (links: any) => void
  handleEdit: (links: LinkProps) => void
  handleDelete: (links: string) => void
}

export function LinkGrid({ links, onLinksChange, handleEdit, handleDelete }: LinkGridProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = links.findIndex((item) => item.id === active.id);
    const newIndex = links.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      console.error("Índices inválidos:", oldIndex, newIndex);
      return;
    }

    // Reordena os itens
    const newItems = arrayMove(links, oldIndex, newIndex).map((item, index) => ({
      ...item,
      index, // Atualiza corretamente os índices após a mudança
    }));

    // Atualiza o estado corretamente
    onLinksChange(newItems)
  }


  const handleToggleActive = (id: string) => {
    onLinksChange(links.map((link) => (link.id === id ? { ...link, active: !link.active } : link)))
  }



  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

      <SortableContext items={links} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {links.map((link) => (
            <div key={link.id}>

              <SortableLink
                link={link}
                onToggleActive={handleToggleActive}
                handleEdit={()=> handleEdit(link)}
                handleDelete={()=>handleDelete(link.id)}
              />
            </div>
          ))}
        </div>
      </SortableContext>

    </DndContext>
  )
}

