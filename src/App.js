import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import RowEight from "./components/rows/eight/RowEight";
import Rowfive from "./components/rows/five/RowFive";
import RowFour from "./components/rows/four/RowFour";
import RowOne from "./components/rows/one/RowOne";
import RowSeven from "./components/rows/seven/RowSeven";
import RowSix from "./components/rows/six/RowSix";
import RowThree from "./components/rows/three/RowThree";
import RowTwo from "./components/rows/two/RowTwo";
import ScrollTop from "./components/scrolltotop/ScrollTop";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const nav = () => {
      window.scrollY > 800 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", nav);
  });

  return (
    <div className="App">
      {/* scroll to top */}

      {scroll && <ScrollTop />}

      <Header />
      <Banner />

      {/* rows */}

      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
      <Rowfive />
      <RowSix />
      <RowSeven />
      <RowEight />

      {/* scroll to top */}
    </div>
  );
}

export default App;
