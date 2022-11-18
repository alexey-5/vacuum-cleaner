import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";

function Cart() {
  const arrCart = useSelector((state) => state.cart.arrCart);
  //const countTotal = pizzaItem.reduce((akk, elem) => elem.count + akk, 0);
  const sum = useSelector((state) => state.cart.sum);
  const dispatch = useDispatch();
  /* const cartItems = [
    {
      imageUrl: "5",
      name: "HYUNDAI H-VCH07",
      price: 5990,
      category: 1,
      idImg: 5,
    },
    {
      imageUrl: "6",
      name: "ECON ECO-1442VC",
      price: 2790,
      category: 2,
      idImg: 6,
    },
  ]; */
  return (
    <section className="container">
      {arrCart.map((el, index) => (
        <div className={styles.card_cart} key={index}>
          <img
            className={styles.img}
            width={130}
            height={130}
            src={require(`../../img/${el.idImg}.jpg`)}
            alt="Vacuum cleaner"
          />
          <div className={styles.info}>
            <p>{el.name}</p>
            <div className={styles.calc}>
              <img
                width={30}
                height={30}
                src={require(`../../img/minus_cart.svg`).default}
                alt="plus"
              />
              {el.count} шт.
              <img
                width={30}
                height={30}
                src={require(`../../img/plus_cart.svg`).default}
                alt="plus"
              />
            </div>
          </div>
          <div>5000 руб.</div>
          <img  className={styles.del}
                width={30}
                height={30}
                src={require(`../../img/del.svg`).default}
                alt="plus"
              />
        </div>
      ))}
    </section>
  );
}
export default Cart;
