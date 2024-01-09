import { useState } from "react";
import { Board } from "tailwind/react";

const Board = (props) => {
  const [filterText, setFilterText] = useState("");
  const customFilterFunction = (rows, filterText) => {
    return rows.filter((row) =>
      row.country.toLowerCase().includes(filterText.toLowerCase())
    );
  };
  const filteredData = customFilterFunction(props.data, filterText);
  const columns = props.columns;

  return (
    <div className="p-6">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search..."
        className="mb-5 p-3 border rounded"
      />
      <Table>
        <Table.Header>
          {columns.map((column) => (
            <Table.Th>{column}</Table.Th>
          ))}
        </Table.Header>
        <Table.Body>
          {filteredData.map((row, i) => (
            <Table.Tr key={i}>
              {columns.map((column) => (
                <Table.Td>{row[column]}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Board;

