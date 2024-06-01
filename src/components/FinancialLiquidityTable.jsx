import {ReactGrid} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import React, {useState} from "react";

const FinancialLiquidityTable = ({headerColor, setTableData}) => {
  const initialColumns = [
    {columnId: "month", width: 100, headerCell: {type: "text", text: "Month"}},
    {
      columnId: "income",
      width: 100,
      headerCell: {type: "text", text: "Income"},
    },
    {
      columnId: "expenses",
      width: 100,
      headerCell: {type: "text", text: "Expenses"},
    },
    {
      columnId: "balance",
      width: 100,
      headerCell: {type: "text", text: "Balance"},
    },
  ];

  const initialRows = [
    {
      rowId: 0,
      cells: [
        {type: "text", text: "January"},
        {type: "text", text: "1000"},
        {type: "text", text: "500"},
        {type: "text", text: "500"},
      ],
    },
    {
      rowId: 1,
      cells: [
        {type: "text", text: "February"},
        {type: "text", text: "1100"},
        {type: "text", text: "600"},
        {type: "text", text: "500"},
      ],
    },
    {
      rowId: 2,
      cells: [
        {type: "text", text: "March"},
        {type: "text", text: "1200"},
        {type: "text", text: "700"},
        {type: "text", text: "500"},
      ],
    },
    {
      rowId: 3,
      cells: [
        {type: "text", text: "April"},
        {type: "text", text: "1300"},
        {type: "text", text: "800"},
        {type: "text", text: "500"},
      ],
    },
    {
      rowId: 4,
      cells: [
        {type: "text", text: "May"},
        {type: "text", text: "1400"},
        {type: "text", text: "900"},
        {type: "text", text: "500"},
      ],
    },
    {
      rowId: 5,
      cells: [
        {type: "text", text: "June"},
        {type: "text", text: "1500"},
        {type: "text", text: "1000"},
        {type: "text", text: "500"},
      ],
    },
  ];

  const [columns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);

  const handleChanges = (changes) => {
    const updatedRows = rows.map((row) => {
      const newRow = {...row};
      changes.forEach((change) => {
        if (change.rowId === row.rowId) {
          newRow.cells[change.columnId] = {...change.newCell};
        }
      });
      return newRow;
    });
    setRows(updatedRows);
    setTableData(updatedRows);
    console.log(JSON.stringify(updatedRows));
  };

  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "60px"}}>
      <ReactGrid
        rows={rows}
        columns={columns}
        onCellsChanged={handleChanges}
        headerRowHeight={40}
        rowHeight={35}
        stickyTopRows={1}
      />
    </div>
  );
};

export default FinancialLiquidityTable;
