import React from "react";
import Navbar from "./compenants/navbar/Navbar";
import SideBar from "./compenants/sidebar/sideBar";
import { Routes, Route } from "react-router-dom";
import { Add } from "./pages/add/Add";
import List from "./pages/list/List";
import Order from "./pages/order/Order";
const App = () => {
  return (
    <div>
      <Navbar />

      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
