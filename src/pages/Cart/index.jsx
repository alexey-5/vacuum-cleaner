import { useDispatch, useSelector } from "react-redux";
import { deleteItem, minus, plus } from "../../store/cartSlise";
import styles from "./Cart.module.scss";

function Cart() {
  const arrCart = useSelector((state) => state.cart.arrCart);
  //const countTotal = pizzaItem.reduce((akk, elem) => elem.count + akk, 0);
  const sum = useSelector((state) => state.cart.sum);
  const dispatch = useDispatch();

  if (!arrCart.length)
    return (
      <div className={styles.cartEmpty}>
        <img
          src={require(`../../img/cartEmpty.jpg`)} /* maxWidth={300} maxHeight={300} */
        />
        <p>
          Ваша корзина абсолютно пустая.
          <br /> Добавьте в неё пылесос!
        </p>
      </div>
      
    );

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
                src={
                  //если товаров больше 1 - покажем активную кнопку
                  el.count > 1
                    ? require(`../../img/minus_cart.svg`).default
                    : require(`../../img/minus_off.svg`).default
                }
                alt="minus"
                onClick={() => dispatch(minus(el.idImg))}
              />
              {el.count} шт.
              <img
                width={30}
                height={30}
                src={require(`../../img/plus_cart.svg`).default}
                alt="plus"
                onClick={() => dispatch(plus(el.idImg))}
              />
            </div>
          </div>
          <div>{el.price * el.count} руб.</div>
          <img
            className={styles.del}
            width={30}
            height={30}
            src={require(`../../img/del.svg`).default}
            alt="delete"
            onClick={() => dispatch(deleteItem(el.idImg))}
          />
        </div>
      ))}
    </section>
  );
}
export default Cart;
