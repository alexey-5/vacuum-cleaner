import { addItem } from "../../store/cartSlise";
import styles from "./CardLike2.module.scss";
import { useDispatch, useSelector } from "react-redux";

function CardLike2() {
  const arrCart = [
    {
      imageUrl: "12",
      name: "SUPRA VCS-1410",
      price: 2590,
      category: 3,
      idImg: 12,
    },
    {
      imageUrl: "13",
      name: "ECON ECO-1415VB",
      price: 2690,
      category: 3,
      idImg: 13,
    },
  ];
  //const dispatch = useDispatch();
  //const { arrCart } = useSelector((state) => state.cart);
  return (
    <div className={styles.like_wrapper}>
      {arrCart.map((el) => (
        <div key={el.idImg} className={styles.card}>
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
            src={require(`../../img/${el.idImg}.jpg`)}
            alt={styles.sneak}
          />
          <p className={styles.card__text}>{el.name}</p>
          <div className={styles.card__prise}>
            <div>
              <span>{el.price} руб.</span>
              <img
                className={styles.plus}
                width={30}
                height={30}
                src={
                  // checked
                  require(`../../img/check.svg`).default
                  // : require(`../../img/plus.svg`).default
                }
                alt="plus"
                /* onClick={() =>
              dispatch(addItem({ ...el }))
            } */
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardLike2;
