import type { ReactNode } from "react";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  cell: (item: T) => ReactNode;
}

export function DataTable<T extends { id: string }>({ columns, items, emptyText }: { columns: DataTableColumn<T>[]; items: T[]; emptyText: string }) {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center text-slate-500">
                  {emptyText}
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="align-top hover:bg-slate-50">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3 text-slate-700">
                      {column.cell(item)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
