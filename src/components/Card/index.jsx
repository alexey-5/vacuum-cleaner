import styles from "./Card.module.css";
//import { useDispatch, useSelector } from "react-redux";
//import { fetchCartDel, fetchCartPlus } from "../../store/cartSlice";
//import { fetchfavPlus } from "../../store/favorSlice";
import { useState } from "react";
import { useEffect } from "react";

function Card({ id, idImg, imageUrl, name, price }) {
  //const onClBtn=()=>alert(title) /* Первый параметр от onClick содержит спецобъект по умолчанию*/
  // если только он не задан аргументом при вызове
  //const dispatch = useDispatch();
  //const itemsCart = useSelector((state) => state.cart.cart);
  //const itemsFavorit = useSelector((state) => state.favor.favor);

  //const [blocking, setBlocking] = useState(false); //блокировка кнопки
  //const [blockingF, setBlockingF] = useState(false); //блокировка кнопки

  /* useEffect(() => {
    setBlocking(false);
    setBlockingF(false);
  }, [itemsCart, itemsFavorit]); // Снятие блока после обновления корзины */

  //const select = itemsCart.find((item) => item.idt === idt); //если в корзине есть эта карточка - галочка
 // const like = itemsFavorit.find((item) => item.idt === idt); //если в фаворитах есть эта карточка - галочка
  //const obj = { id, idt, imgSrc, title, prise };
  //console.log('card- ',itemsCart)

  /* const Select = () => {
    //find возвращает найденный по условию аргумент или andef.
    setBlocking(true);
    const snik = itemsCart.find((item) => item.idt === idt);
    if (itemsCart.find((item) => item.idt === idt)) {
      dispatch(fetchCartDel(snik.id)); // удаление из корзины по аргументу - id
    } else {
      // или запись
      dispatch(fetchCartPlus(obj));
    }
  }; */

  /* const Like = () => {
    setBlockingF(true);
    /// const snik = itemsFavorit.find((item) => item.idt === idt);
    if (!itemsFavorit.find((item) => item.idt === idt)) {
      dispatch(fetchfavPlus(obj));
    }
  }; */
  return (
    <div className={styles.card}>
      <img className={styles.card__like}
        //onClick={Like}
        //className={blockingF ? styles.card__disabled : styles.card__like}
        width={30}
        height={30}
         src={require(`../../img/like.svg`).default
          /* like
            ? require(`../../img/like32.svg`).default
            : require(`../../img/unlike30.svg`).default */
        }
        alt="like" 
      />
      <img className={styles.img}
        width={130 }
        height={130}
        src={require(`../../img/${idImg}.jpg`)}
        alt={styles.sneak}
      />
      <p className={styles.card__text}>{name}</p>
      <div className={styles.card__prise}>
        <div>
          {/* <p>ЦЕНА</p> */}
          <b>{price} руб.</b>
        </div>
       {/*  <img
          onClick={Select}
          className={blocking ? styles.card__disabled : styles.card__btn}
          width={32}
          height={32}
          src={
            select
              ? require(`../../img/plus-select.svg`).default
              : require(`../../img/plus32.svg`).default
          }
          alt="plus"
        /> */}
      </div>
    </div>
  );
}
export default Card;
