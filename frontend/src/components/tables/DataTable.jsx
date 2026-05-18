import { useState } from "react";
import Typography from "../common/Typography";
import Button from "../common/Button";

const DataTable = ({
  columns = [],
  data = [],
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  // FILTER DATA (SEARCH)
  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <Typography variant="h2">
          Records
        </Typography>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg 
          bg-white dark:bg-gray-700 
          text-gray-800 dark:text-white"
        />
      </div>

      {/* TABLE */}
      <table className="w-full text-left">

        <thead>
          <tr className="border-b dark:border-gray-700">
            {columns.map((col, i) => (
              <th
                key={i}
                className="p-2 text-gray-600 dark:text-gray-300"
              >
                {col.header}
              </th>
            ))}
            <th className="p-2 text-gray-600 dark:text-gray-300">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i} className="border-b dark:border-gray-700">

              {columns.map((col, j) => (
                <td
                  key={j}
                  className="p-2 text-gray-800 dark:text-white"
                >
                  {row[col.accessor]}
                </td>
              ))}

              {/* ACTIONS */}
              <td className="p-2 flex gap-2">

                <Button
                  variant="secondary"
                  onClick={() => onEdit(row)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(row)}
                >
                  Delete
                </Button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-4">

        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </Button>

        <Typography variant="small">
          Page {page} of {totalPages || 1}
        </Typography>

        <Button
          variant="secondary"
          onClick={() =>
            setPage((p) => Math.min(p + 1, totalPages))
          }
        >
          Next
        </Button>

      </div>

    </div>
  );
};

export default DataTable;