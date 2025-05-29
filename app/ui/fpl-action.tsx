import { clsx } from 'clsx';
import { Cell } from '@/app/lib/my-definitions';
import getPlayerData from "@/app/lib/fpl";

// @TODO Add some kind of table filtering library, and freeze the top row + first 3 columns.
export default async function FplTable() {
  const tableData = await getPlayerData();

  return (
    <table className="text-sm">
      {
        tableData.header && (
          <thead>
            <tr>
              {
                tableData.header.map((h_cell, h_index: number) => (
                  <th className={clsx(
                    "border text-left py-1 px-2 text-nowrap",
                    h_cell.className
                  )} key={h_index}>
                    {
                      h_cell.title && (<abbr title={h_cell.title}>{h_cell}</abbr>)
                      || h_cell
                    }
                  </th>
                ))
              }
            </tr>
        </thead>)
      }
      <tbody>
      {
        tableData.rows.map((row, r_index: number) => (
          <tr key={r_index}>
            {
              row.map((r_cell: Cell, c_index: number) => (
                <td className={clsx(
                  "border py-1 px-2 text-nowrap",
                  r_cell?.className,
                )} key={c_index}>{r_cell}</td>
              ))
            }
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
