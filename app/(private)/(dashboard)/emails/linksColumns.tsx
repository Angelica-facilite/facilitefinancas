import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DotSquareIcon, GripVertical } from "lucide-react";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";

export const baseUrl = "https://firebasestorage.googleapis.com/v0/b/racheldasilva-283f4.appspot.com/o/defaultLink.png?alt=media&token=3e9e3fde-e974-4dfb-9774-8a197dce2241";

// Definição do esquema Zod
export const LinkSchema = z.object({
    id: z.string(),
    imageUrl: z.string(),
    name: z.string(),
    url: z.string(),
});

// Tipo inferido a partir do esquema Zod
export type LinkType = z.infer<typeof LinkSchema>;

export const linksColumns = <TData,>(): ColumnDef<TData>[] => [
    
    {
        id: "imageUrl",
        accessorKey: "imageUrl",
        header: "Image",
        cell: ({ row }) => {
            const content = row.original as LinkType;
            return (
                <div className="relative w-full pb-[33.33%] border-2 rounded-sm border-gray-400">
                    <Image
                        src={content.imageUrl}
                        alt={content.name}
                        layout="fill"
                        objectFit="cover"
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    {content.imageUrl === baseUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-primary-700 text-sm font-bold tracking-tight bg-white/75 px-4 py-2 rounded">
                                {content.name}
                            </h1>
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        id: "name",
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            const content = row.original as LinkType;
            return (
                <div className="flex items-center">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{content?.name}</p>
                    </div>
                </div>
            );
        },
    },
    {
        id: "url",
        accessorKey: "url",
        header: "Link",
        cell: ({ row }) => {
            const content = row.original as LinkType;
            return (
                <div className="flex items-center">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{content?.url}</p>
                    </div>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Ações",
        cell: ({ table, row }) => {
            
            const actions = table.options.meta?.actions as {
                handleDelete: (item: LinkType) => void;
                handleEdit: (item: LinkType) => void;
            };
            const item = row.original as LinkType;
            return (
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            variant="ghost"
                            className="h-8 w-8 p-0 z-50"
                        >
                            <span className="sr-only">Open menu</span>
                            <DotSquareIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                actions.handleDelete(item);
                            }}
                        >
                            Apagar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={(e) => {
                                e.preventDefault();
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                actions.handleEdit(item);
                            }}
                        >
                            Editar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
