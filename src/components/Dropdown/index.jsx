import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBackground } from "../../store/baseSlise";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
   const [list, setList] = useState(false);
    const dispatch = useDispatch();
   return (
      <div className={styles.wrapper}>

         <button onClick={() => setList(!list)}>Дополнительно</button>

         <ul className={list ? styles.list : styles.hidden}>
            <Link to="/slider">
               <li className={styles.item}>Слайдер</li>
            </Link>
            <li onClick={()=>dispatch(setBackground())} className={styles.item}>Сменить фон</li>
            
         </ul>
      </div>
   )
}
export default Dropdown