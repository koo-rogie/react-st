import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Design from "../Design";
import Toggle from "../Toggle";

const Samlio = () => {
   return (
      <div>
         <nav>
            <ul>
               <li><Link to="./Design">Design</Link></li>
               <li><Link to="./Toggle">Toggle</Link></li>
            </ul>
         </nav>
         <Routes>
            <Route path="./Design" element={<Design />} />
            <Route path="./Toggle" element={<Toggle />} />
         </Routes>

      </div>
   )

}

export default Samlio;