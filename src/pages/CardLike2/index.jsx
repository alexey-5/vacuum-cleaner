import { addItem } from "../../store/cartSlise";
import styles from "./CardLike2.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemLike } from "../../store/likeSlise";
import Back from "../../components/Back";

function CardLike2() {
  const dispatch = useDispatch();
  const { arrLike } = useSelector((state) => state.like);
  const { arrCart } = useSelector((state) => state.cart);

  if (arrLike.length === 0)//если корзина пуста
    return (<section className="container">
      <div className={styles.empty}>Вы ничего не добавили в избранное...</div>
      <Back/></section>
    );

  return (
    <section className="container">
    <div className={styles.like_wrapper}>
      {arrLike.map((el) => (
        <div key={el.idImg} className={styles.card}>
          <img
            className={styles.card__like}
            onClick={() => dispatch(deleteItemLike(el.idImg))}
            width={30}
            height={30}
            src={require(`../../img/del.svg`).default}
            alt="delete"
          />
          <img
            className={styles.img}
            width={130}
            height={130}
            src={require(`../../img/${el.imageUrl}.jpg`)}
            alt="CleanVacuum"
          />
          <h3 className={styles.card__text}>{el.name}</h3>
          <div className={styles.card__prise}>
            <div>
              <span>{el.price} руб.</span>
              <img
                className={styles.plus}
                width={30}
                height={30}
                src={ arrCart.find(item=>item.idImg===el.idImg)
                    ? require(`../../img/check.svg`).default
                    : require(`../../img/plus.svg`).default
                }
                alt="plus"
                onClick={() =>//для добавления отправляем объкт
                dispatch(addItem(el))
              }
              />
            </div>
          </div>
        </div>
      ))}
      
    </div>
    <Back/></section>
  );
}
export default CardLike2;
