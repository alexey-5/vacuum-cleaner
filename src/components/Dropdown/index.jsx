import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
   const [list, setList] = useState(false)
   return (
      <div className={styles.wrapper}>

         <button onClick={() => setList(!list)}>Дополнительно</button>

         <ul className={list ? styles.list : styles.hidden}>
            <Link to="/slider">
               <li className={styles.item}>Слайдер</li>
            </Link>
            {/* <li className={styles.item}>Второй</li>
            <li className={styles.item}>Третий</li> */}
         </ul>
      </div>
   )
}
export default Dropdown