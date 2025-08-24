import * as React from "react";
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

// Interface correta para armazenar actions na meta
// interface TableMeta<TData> {
//   actions: Record<string, (item: TData) => void>;
// }

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  actions?: Record<string, (item: TData) => void>;
  searchKey?: string;
  actionComponent?: React.ReactNode;
  draggable?: boolean;
  onReorder?: (items: TData[]) => void

}

function DraggableTableRow({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, transform, transition, setNodeRef, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <TableRow ref={setNodeRef} style={style} className={`group  ${isDragging ? "opacity-50" : ""}`}>
      <TableCell {...attributes} {...listeners} className="cursor-grab w-10  text-gray-500 ">
        <GripVertical className="h-5 w-5  " />
      </TableCell>
      {children}
    </TableRow>
  );
}

export function DataTable<TData extends { id: string }>({
  data: initialData,
  columns,
  actions = {},
  searchKey,
  actionComponent,
  draggable = false,
  onReorder
}: DataTableProps<TData>) {
  const [data, setData] = React.useState(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  React.useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Use meta para armazenar actions corretamente
  const table = useReactTable<TData>({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    meta: {
      actions: actions, // Aqui as ações são passadas corretamente
    },
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        const newItems = arrayMove(items, oldIndex, newIndex)
        onReorder?.(newItems)
        return newItems
      });
    }
  }

  return (
    <Card className="w-full">
      <div className="flex items-center justify-between space-x-2 p-4">
        {searchKey && (
          <Input
            placeholder="Filtrar..."
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        )}
        {actionComponent && <div className="flex items-center gap-2">{actionComponent}</div>}
      </div>
      <div className="rounded-md border">
        {draggable ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={data.map((item) => item.id)} strategy={verticalListSortingStrategy}>
              <Table>
                <TableHeader >
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      <div className="w-0"></div>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <DraggableTableRow key={item.id} id={item.id}>
                      {table.getRowModel().rows.find((row) => row.original.id === item.id)?.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </DraggableTableRow>
                  ))}
                </TableBody>
              </Table>
            </SortableContext>
          </DndContext>
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </Card>
  );
}
