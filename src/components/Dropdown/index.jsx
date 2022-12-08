import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
   const [list, setList] = useState(false)
   return (
      <div className={styles.wrapper}>
         
         <button onClick={() => setList(!list)}>Дополнительно</button>

         <ul className={list ? styles.list : styles.hidden}>
            <li className={styles.item}>Первый</li>
            {/* <li className={styles.item}>Второй</li>
            <li className={styles.item}>Третий</li> */}
         </ul>
      </div>
   )
}
export default Dropdown