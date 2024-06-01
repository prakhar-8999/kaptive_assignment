import {Checkbox, Container, FormControlLabel} from "@material-ui/core";
import React, {useState} from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FinancialLiquidityTable from "./FinancialLiquidityTable";

const FinancialLiquidityPlanner = () => {
  const [tableData, setTableData] = useState([
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
  ]);

  const [showLineChart, setShowLineChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);

  const transformDataForChart = (data) => {
    return data.map((row) => ({
      name: row.cells[0].text,
      income: parseInt(row.cells[1].text, 10),
      expenses: parseInt(row.cells[2].text, 10),
      balance: parseInt(row.cells[3].text, 10),
    }));
  };

  return (
    <Container>
      <FormControlLabel
        control={
          <Checkbox
            checked={showLineChart}
            onChange={() => setShowLineChart(!showLineChart)}
          />
        }
        label="Show Line Chart"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showBarChart}
            onChange={() => setShowBarChart(!showBarChart)}
          />
        }
        label="Show Bar Chart"
      />
      <FinancialLiquidityTable
        setTableData={setTableData}
        headerColor="#3f51b5"
      />
      <div
        style={{display: "flex", justifyContent: "center", marginTop: "70px"}}
      >
        <ComposedChart
          width={600}
          height={300}
          data={transformDataForChart(tableData)}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {showLineChart && (
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
          )}
          {showLineChart && (
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
          )}
          {showLineChart && (
            <Line type="monotone" dataKey="balance" stroke="#ffc658" />
          )}
          {showBarChart && <Bar dataKey="income" fill="#8884d8" />}
          {showBarChart && <Bar dataKey="expenses" fill="#82ca9d" />}
          {showBarChart && <Bar dataKey="balance" fill="#ffc658" />}
        </ComposedChart>
      </div>
    </Container>
  );
};

export default FinancialLiquidityPlanner;
