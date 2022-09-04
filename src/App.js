import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import RowOne from "./components/rows/one/RowOne";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* rows */}

      <RowOne />
    </div>
  );
}

export default App;
