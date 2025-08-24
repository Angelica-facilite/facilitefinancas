"use client"

import * as React from "react"
import { PlusCircle, RefreshCw, ChevronsUpDownIcon as ChevronUpDown, GripVertical } from "lucide-react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataTableProps<TData> {
  data: TData[]
  columns: Record<string, string>
  onReorder?: (items: TData[]) => void
  onDelete?: (item: TData) => void
  onEdit?: (item: TData) => void
  onCreate?: () => void
  searchKey?: string
  draggable?: boolean
}

interface DraggableTableRowProps {
  id: string
  children: React.ReactNode
}

function DraggableTableRow({ id, children }: DraggableTableRowProps) {
  const { attributes, listeners, transform, transition, setNodeRef, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <TableRow ref={setNodeRef} style={style} className={`group ${isDragging ? "opacity-50" : ""}`}>
      <TableCell>
        <Button
          variant="ghost"
          className="cursor-grab bg-pink-300 "
          {...attributes}
          {...listeners}
        >
          <GripVertical className="size-4 text-red-500" />
        </Button>
      </TableCell>
      {children}
    </TableRow>
  )
}

export function DataTable<TData extends { id: string }>({
  data: initialData,
  columns,
  onReorder,
  onDelete,
  onEdit,
  onCreate,
  searchKey,
  draggable = false,
}: DataTableProps<TData>) {
  const [data, setData] = React.useState(initialData)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    setData(initialData)
  }, [initialData])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const tableColumns: ColumnDef<TData>[] = React.useMemo(() => {
    const cols: ColumnDef<TData>[] = []

    if (draggable) {
      cols.push({
        id: "drag",
        size: 50,
        header: () => <div></div>, // Pode deixar vazio ou adicionar um ícone
      })
    }

 

    Object.entries(columns).forEach(([key, header]) => {
      cols.push({
        accessorKey: key,
        header: ({ column }) => {
          return (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              {header}
              <ChevronUpDown className="ml-2 size-4" />
            </Button>
          )
        },
        cell: ({ row }) => {
          // Garante que estamos acessando o valor correto usando a chave
          const value = row.original[key as keyof typeof row.original]
          return <div className="font-medium"> ** {String(value)}</div>
        },
      })
    })

    if (onEdit || onDelete) {
      cols.push({
        id: "actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {onEdit && (
              <Button variant="ghost" size="sm" onClick={() => onEdit(row.original)}>
                Editar
              </Button>
            )}
            {onDelete && (
              <Button variant="ghost" size="sm" className="text-red-600" onClick={() => onDelete(row.original)}>
                Deletar
              </Button>
            )}
          </div>
        ),
      })
    }

    return cols
  }, [columns, draggable, onDelete, onEdit])

  const table = useReactTable({
    data,
    columns: tableColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over?.id)

        const newItems = arrayMove(items, oldIndex, newIndex)
        onReorder?.(newItems)
        return newItems
      })
    }
  }

  const TableContent = () => (
    <Table className="">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {draggable ? (
          <SortableContext items={data.map((item) => item.id)} strategy={verticalListSortingStrategy}>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <DraggableTableRow key={row.original.id} id={row.original.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </DraggableTableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableColumns.length} className="h-24 text-center">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </SortableContext>
        ) : (
          <>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableColumns.length} className="h-24 text-center">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </>
        )}
      </TableBody>
    </Table>
  )

  const content = (
    <Card className="w-full">
      <div className="flex items-center justify-between space-x-2 p-4">
        <div className="flex items-center gap-2">
          {searchKey && (
            <Input
              placeholder="Filtrar..."
              value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
              className="max-w-sm"
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          {onCreate && (
            <Button onClick={onCreate}>
              <PlusCircle className="mr-2 size-4" />
              Criar
            </Button>
          )}
          <Button variant="outline" onClick={() => table.resetColumnFilters()}>
            <RefreshCw className="mr-2 size-4" />
            Atualizar
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <TableContent />
      </div>
      <div className="flex items-center justify-between space-x-2 p-4">
        <div className="text-sm text-muted-foreground">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Próximo
          </Button>
        </div>
      </div>
    </Card>
  )

  if (draggable) {
    return (
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {content}
      </DndContext>
    )
  }

  return content
}

