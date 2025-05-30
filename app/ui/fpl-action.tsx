import { clsx } from 'clsx';
import { Cell } from '@/app/lib/my-definitions';
import getPlayerData from "@/app/lib/fpl";

// @TODO Add some kind of table filtering library, and freeze the top row + first 3 columns.
export default async function FplTable() {
  const poopData = await getPlayerData();

  return (
    <table className="text-sm">
      {
        poopData.header && (
          <thead>
            <tr>
              {
                poopData.header.map((p_cell, h_index: number) => (
                  <th className={clsx(
                    "border text-left py-1 px-2 text-nowrap border-red",
                    p_cell.className
                  )} key={h_index}>
                    {
                      p_cell.title && (<abbr title={p_cell.title}>{p_cell}</abbr>)
                      || p_cell
                    }
                  </th>
                ))
              }
            </tr>
        </thead>)
      }
      <tbody>
      {
        poopData.rows.map((row, r_index: number) => (
          <tr key={r_index}>
            {
              row.map((r_cell: Cell, c_index: number) => (
                <td className={clsx(
                  "border py-1 px-2 text-nowrap border-blue green poooooooorange",
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
