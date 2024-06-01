import React from "react";
import "./App.css";
import FinancialLiquidityPlanner from "./components/FinancialLiquidityPlanner";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Financial Liquidity Planner</h1>
        </header>
        <main>
          <FinancialLiquidityPlanner />
        </main>
      </div>
    </>
  );
}

export default App;
