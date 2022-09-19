import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RowEight from "./components/rows/eight/RowEight";
import RowEighteen from "./components/rows/eighteen/RowEighteen";
import RowEleven from "./components/rows/eleven/RowEleven";
import RowFifteen from "./components/rows/fifteen/RowFifteen";
import Rowfive from "./components/rows/five/RowFive";
import RowFour from "./components/rows/four/RowFour";
import RowFourteen from "./components/rows/fourteen/RowFourteen";
import RowNine from "./components/rows/nine/RowNine";
import RowNineteen from "./components/rows/nineteen/RowNineteen";
import RowOne from "./components/rows/one/RowOne";
import RowSeven from "./components/rows/seven/RowSeven";
import RowSeventeen from "./components/rows/seventeen/RowSeventeen";
import RowSix from "./components/rows/six/RowSix";
import RowSixteen from "./components/rows/sixteen/RowSixteen";
import RowTen from "./components/rows/ten/RowTen";
import RowThirteen from "./components/rows/thirteen/RowThirteen";
import RowThree from "./components/rows/three/RowThree";
import RowTwelve from "./components/rows/twelve/RowTwelve";
import RowTwentyOne from "./components/rows/twenty one/RowTwentyOne";
import RowTwentyThree from "./components/rows/twenty three/RowTwentyThree";
import RowTwentyTwo from "./components/rows/twenty two/RowTwentyTwo";
import RowTwenty from "./components/rows/twenty/RowTwenty";
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
      <RowNine />
      <RowTen />
      <RowEleven />
      <Banner2 />
      <RowTwelve />
      <RowThirteen />
      <RowFourteen />
      <RowFifteen />
      <RowSixteen />
      <RowSeventeen />
      <RowEighteen />
      <RowNineteen />
      <RowTwenty />
      <RowTwentyOne />
      <RowTwentyTwo />
      <RowTwentyThree />
      <Footer />
    </div>
  );
}

export default App;
