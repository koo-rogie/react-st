import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Pages from "./pages/pages";
import Design from "./pages/Design";
import Toggle from "./pages/Toggle";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null); // pp-list 상태
  const [selectedPage, setSelectedPage] = useState(null); // explanation-list 상태

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedPage(null); // 카테고리 변경 시 하위 선택 초기화
  };

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  const renderContent = () => {
    if (selectedCategory && selectedPage) {
      if (selectedPage === "Design") return <Design category={selectedCategory} />;
      if (selectedPage === "Toggle") return <Toggle category={selectedCategory} />;
    }
    return <Pages />;
  };

  return (
    <div className="App">
      <nav>
        <ul className="pp-list">
          {["ALL", "산리오", "한국관광공사", "플래디스", "버거킹", "진교초등학교", "이케아"].map((category) => (
            <li key={category}>
              <button onClick={() => handleCategoryClick(category)}>{category}</button>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <ul className="explanation-list">
          {["Design", "Toggle"].map((page) => (
            <li key={page}>
              <button onClick={() => handlePageClick(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </main>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
