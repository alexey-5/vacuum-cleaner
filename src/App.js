import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
