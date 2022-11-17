import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.scss";
import {setCategory} from "../../store/baseSlise"

function Categories() {
  const dispatch = useDispatch()
  const selectCategory = useSelector((state) => state.base.categories);
  const categories = ["Все", "Вертикальные", "Контейнерные", "Мешковые"];
  return (
    <div>
      {categories.map((el, index) => (
        <button
          key={index}
          className={
            selectCategory == index ? styles.button_select : styles.button
          }
          onClick={()=>dispatch(setCategory(index))}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
export default Categories;
