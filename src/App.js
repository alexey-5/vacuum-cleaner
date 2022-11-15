import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./scss/app.scss";

function App() {
    const [baza, setBaza] = useState([])

  useEffect(()=>{
    axios('https://636fc33ebb9cf402c81f2d17.mockapi.io/baza')
    .then(res=>setBaza(res.data))
    .catch(err=>console.log(err))
  },[])
  console.log(baza)
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <img
              width="80"
              src={require("./img/logo2.png")}
              alt="Vacuum cleaner"
            ></img>
            <div>
              <h1>Пылесосы</h1>
              Самые лучшие
            </div>
          </div>
          <div className="button">Корзина<br/>
             1000 ₽ | 3 шт.
          </div>
        </div>
      </header>
      <section className="container">
        <div className="home">
          {
            baza.map(el=><Card {...el} key={el.idImg}/>)
          }
        </div>
      </section>
    </div>
  );
}

export default App;
