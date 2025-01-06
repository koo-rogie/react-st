import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// 페이지 업로드
import Pages from "./pages/pages";
import Samlio from "./pages/pp/Samlio";
import Kntoo from "./pages/pp/Kntoo";
import Pledis from "./pages/pp/Pledis";
import Burgerking from "./pages/pp/Burgerking";
import Elementary from "./pages/pp/Elementary-school";
import Ikea from "./pages/pp/Ikea";

function App() {
  return (
    <div className="inner">
      <div className="App">
        <nav>
          <ul className="pp-list">
            <li><Link to="/" > ALL </Link> </li>
            <li><Link to="/Samlio" > 산리오 </Link> </li>
            <li><Link to="/Kntoo" > 한국관광공사 </Link> </li>
            <li><Link to="/Pledis" > 플래디스 </Link> </li>
            <li><Link to="/Burgerking" > 버거킹 </Link> </li>
            <li><Link to="/Elementary" > 진교초등학교 </Link> </li>
            <li><Link to="/Ikea" > 이케아 </Link> </li>
          </ul>
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/Samlio" element={<Samlio />} />
            <Route path="/Kntoo" element={<Kntoo />} />
            <Route path="/Pledis" element={<Pledis />} />
            <Route path="/Burgerking" element={<Burgerking />} />
            <Route path="/Elementary" element={<Elementary />} />
            <Route path="/Ikea" element={<Ikea />} />
          </Routes>
        </nav>
      </div>
    </div>

  );
}

export default App;
