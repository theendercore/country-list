import * as React from "react";
import "./App.css";
import CountryTable from "./components/CountryTable";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryTable />
    </div>
  );
}

export default App;
