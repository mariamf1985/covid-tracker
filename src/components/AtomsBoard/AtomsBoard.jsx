import React, { useState } from "react";
import './AtomsBoard.css';
import DataTable from "react-data-table-component-with-filter";

const AtomsBoard = (props) => {
  const [filterText, setFilterText] = useState("");
  const customFilterFunction = (rows, filterText) => {
    return rows.filter((row) =>
      row.country.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const filteredData = customFilterFunction(props.data, filterText);
  const columns = props.columns;

  return (
    <div className="bg-white text-indigo-800 p-4 rounded shadow mt-[1px] snap-x">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      <DataTable data={filteredData} columns={columns} pagination theme="customTheme" />
    </div>
  );
};

export default AtomsBoard;
