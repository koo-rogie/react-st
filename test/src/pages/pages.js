import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import pages from "./css/pages.css"
import Design from "./Design";
import Toggle from "./Toggle";

const PageName = ({ PageName }) => {
   return (
      <li>
         <div>
            <p className="Num">{PageName.site}</p>
            <p>{PageName.name}</p>
         </div>
         {/* <Link to={Design} /> */}
      </li>
   )
}

const Pages = () => {
   const ppList = [
      { site: "1", name: "산리오" },
      { site: "2", name: "한국관광공사" },
      { site: "3", name: "플래디스" },
      { site: "4", name: "버거킹" },
      { site: "5", name: "진교초등학교" },
      { site: "6", name: "이케아" }
   ]

   return (
      <div>
         <ul className="Pagename-list">
            {ppList.map(ppList => <PageName PageName={ppList} />)}
         </ul>

      </div>
   )
}

export default Pages;