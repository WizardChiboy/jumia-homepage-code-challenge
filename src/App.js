import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import RowOne from "./components/rows/one/RowOne";
import RowThree from "./components/rows/three/RowThree";
import RowTwo from "./components/rows/two/RowTwo";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* rows */}

      <RowOne />
      <RowTwo />
      <RowThree />
    </div>
  );
}

export default App;
