import styles from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addItem } from "../../store/cartSlise";

function Card({ idImg, name, price, category, imageUrl }) {
  const dispatch = useDispatch();
  const { arrCart } = useSelector((state) => state.cart);
   // смена иконки при выборе товара
  const checked = arrCart.find((el) => el.idImg === idImg);

  return (
    <div className={styles.card}>
      <img
        className={styles.card__like}
        //onClick={Like}
        //className={blockingF ? styles.card__disabled : styles.card__like}
        width={30}
        height={30}
        src={
          require(`../../img/like.svg`).default
          /* like
            ? require(`../../img/like32.svg`).default
            : require(`../../img/unlike30.svg`).default */
        }
        alt="like"
      />
      <img
        className={styles.img}
        width={130}
        height={130}
        src={require(`../../img/${idImg}.jpg`)}
        alt={styles.sneak}
      />
      <p className={styles.card__text}>{name}</p>
      <div className={styles.card__prise}>
        <div>
          <span>{price} руб.</span>
          <img
            className={styles.plus}
            width={30}
            height={30}
            src={
              checked
                ? require(`../../img/check.svg`).default
                : require(`../../img/plus.svg`).default
            }
            alt="plus"
            onClick={() =>
              dispatch(addItem({ idImg, name, price, category, imageUrl }))
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
