import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CardLike2 from "./pages/CardLike2";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import One from "./pages/One";
import Slider from "./pages/Sliders";
import "./scss/app.scss";
//import bg1 from "./img/bg/1.jpg";

function App() {
   const bg = useSelector((state)=>state.base.background);
   ///console.log('фонApp = ',bg)
   const bg2 = require(`./img/bg/${bg}.jpg`)
  return (
    <>
    <div className="wrapper" style={{backgroundImage:`url(${bg2})`}}>
      
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
