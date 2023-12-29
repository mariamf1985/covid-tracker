import { useState } from "react";
import DataTable from "react-data-table-component-with-filter";
import "styled-components";
import "./_tableAtom.css";
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
    <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search..."
      />
      <DataTable
        data={filteredData}
        columns={columns}
        pagination
        theme="customTheme"
      />
    </div>
  );
};
export default Board;
