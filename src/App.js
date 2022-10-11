import React, { useState } from "react";
import "./App.css";
import Table from "./components/table";
import { TableProvider } from "../src/contexapi/TableContex";
function App() {
  return (
    <>
      <TableProvider>
        <Table />
      </TableProvider>
    </>
  );
}

export default App;
