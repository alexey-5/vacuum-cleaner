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
              Самые лучшие
            </div>
          </div>
        </Link>
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
    </header>
  );
}
export default Header;
