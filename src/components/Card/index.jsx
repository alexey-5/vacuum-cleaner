import styles from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemLike } from "../../store/likeSlise";
import { deleteItem } from "../../store/likeSlise";
import { addItem } from "../../store/cartSlise";
import { Link } from "react-router-dom";

function Card({ idImg, name, price, category, imageUrl }) {
  const dispatch = useDispatch();
  const { arrCart } = useSelector((state) => state.cart);
  const { arrLike } = useSelector((state) => state.like);
  // смена иконки при выборе товара
  const checked = arrCart.find((el) => el.idImg === idImg);
  const liked = arrLike.find((el) => el.idImg === idImg);

  return (
    <div className={styles.card}>
      <img
        className={styles.card__like} //добавляем в избранное
        onClick={() =>
          dispatch(addItemLike({ idImg, name, price, category, imageUrl }))
        }
        width={30}
        height={30}
        src={
          liked
            ? require(`../../img/like-add.svg`).default
            : require(`../../img/like.svg`).default
        }
        alt="like"
      />
      <Link to={`/product/${imageUrl}`}>
        <img
          className={styles.img}
          width={130}
          height={130}
          src={require(`../../img/${imageUrl}.jpg`)}
          alt={styles.sneak}
        />
      </Link>
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
              //для добавления отправляем объкт
              dispatch(addItem({ idImg, name, price, category, imageUrl }))
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
