import { Link } from "react-router-dom"
import style from "./Back.module.scss"

function Back(){
   return (<div className={style.wrap}>
    <Link to="/">
       <button className={style.button}>На главную</button>
    </Link>  
   </div>
   )
}
export default Back