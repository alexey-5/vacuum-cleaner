import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { total } from "../../store/cartSlise";
import styles from "./Header.module.scss";

function Header() {
  const { arrCart, sum } = useSelector((state) => state.cart);
  const render1 = useRef(false);
  const [countTotal, setCountTotal] = useState(0);
  const dispatch = useDispatch();

  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (render1.current) {
      const json = JSON.stringify(arrCart);
      localStorage.setItem("cartVacuumCleaner", json);
    }
    render1.current = true;
    setCountTotal(arrCart.reduce((akk, elem) => akk + elem.count, 0));
    dispatch(total()); // считаем стоимость корзины
  }, [arrCart]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.header_logo}>
            <img
              width="80"
              src={require("../../img/logo2.png")}
              alt="Vacuum cleaner"
            ></img>
            <div className={styles.title}>
              <h1>Пылесосы</h1>
              <h3>Самые лучшие</h3>
            </div>
          </div>
        </Link>
        <img className={styles.info}
          onClick={() => setInfo(!info)}
          width="50"
          height="50"
          src={require("../../img/info.svg").default}
          alt="like"
        />
        <Link to="/like">
          <div className={styles.button}>
            <img
              width="50"
              height="50"
              src={require("../../img/like-add.svg").default}
              alt="like"
            />
          </div>
        </Link>
        <Link to="/cart">
          <div className={styles.button}>
            Корзина
            <br />
            {sum} ₽ | {countTotal} шт.
          </div>
        </Link>
      </div>
      <div className={info ? styles.info_text : styles.info_none}>
        <ul>
          <li>
            Проект разработан на библиотеке <b>react</b>.
          </li>
          <li>
            Используется стейт менеджер <b>redux/toolkit</b>.
          </li>
          <li>
            Применяется <b>react-router v6</b>.
          </li>
          <li>
            Это учебный проект от alexey-5  <b>alexey-dynai48@yandex.ru</b>.
          </li>
        </ul>
        <img
            className={styles.del}
            width={30}
            height={30}
            src={require(`../../img/del.svg`).default}
            alt="delete"
            onClick={() => setInfo(false)}
          />
      </div>
    </header>
  );
}
export default Header;
