import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CardLike2 from "./pages/CardLike2";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import One from "./pages/One";
import Slider from "./pages/Sliders";
import "./scss/app.scss";

function App() {
   const bg = useSelector((state)=>state.base.background);
  return (
    <>
    <div className="wrapper" style={{backgroundImage:`url(/img/bg/${bg}.jpg)`}}>
      
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/like" element={<CardLike2 />} />
        <Route path="/product/:imageUrl" element={<One />} />
      </Routes>
     
    </div>
    <p className="futer">Это учебный проект. Вся информация на сайте условная</p> 
    </>
  );
}

export default App;
