import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/shadcn-ui/avatar';
import { Button } from '@/common/components/shadcn-ui/button';
import { Checkbox } from '@/common/components/shadcn-ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/common/components/shadcn-ui/dropdown-menu';
import { Input } from '@/common/components/shadcn-ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/shadcn-ui/table';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type VisibilityState,
} from '@tanstack/react-table';
import { ChevronDown, Edit, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<TTeacherTable>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate') === 'indeterminate'
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'avatar',
    header: 'Photo',
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.original.avatar} />
        <AvatarFallback className="uppercase">{row.original.name.slice(0, 2)}</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <span>{row.original.name}</span>,
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'designation',
    header: 'Designation',
    cell: ({ row }) => <span>{row.original.designation}</span>,
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => <span>{row.original.address}</span>,
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => <span>{row.original.phone}</span>,
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <span>{row.original.email}</span>,
    enableGlobalFilter: true,
  },
  {
    id: 'actions',
    header: () => <span className="text-right inline-block w-full">Actions</span>,
    cell: ({ row }) => {
      const teacher = row.original;

      return (
        <div className="flex items-center justify-end">
          <Button
            variant="ghost"
            className="hover:bg-transparent"
            asChild
          >
            <Link to={teacher.id}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="hover:bg-transparent"
            asChild
          >
            <Link to={`edit-teacher/${row.original.id}`}>
              <Edit className="w-4 h-4 text-blue-500" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="hover:bg-transparent"
            onClick={() => alert('deleted')}
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      );
    },
  },
];

export default function Teacher_table({ teachers }: { teachers: TTeacherTable[] }) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: teachers,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      globalFilter,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search by name, email, designation, address, phone..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />

        <DropdownMenu>
          <Button
            variant="outline"
            className="ml-auto"
            asChild
          >
            <DropdownMenuTrigger>
              Columns <ChevronDown />
            </DropdownMenuTrigger>
          </Button>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export type TTeacherTable = {
  key: string;
  id: string;
  name: string;
  designation: string;
  address: string;
  phone: string;
  email: string;
  avatar: string;
};
