import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {
  const [baza, setBaza] = useState([]);

  useEffect(() => {
    axios("https://636fc33ebb9cf402c81f2d17.mockapi.io/baza")
      .then((res) => setBaza(res.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(baza)
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home baza={baza} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
