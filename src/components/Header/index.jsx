import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const arrCart = useSelector((state)=>state.cart.arrCart)

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
        <Link to="/cart">
          <div className={styles.button}>
            Корзина
            <br />
            1000 ₽ | 3 шт.
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
