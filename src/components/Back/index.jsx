import { Link } from "react-router-dom"
import style from "./Back.module.scss"
import { AiOutlineHome } from "react-icons/ai";

function Back(){
   return (<div className={style.wrap}>
    <Link to="/">
       <button className={style.button}>На главную <AiOutlineHome size="20" color="red"/></button>
    </Link>  
   </div>
   )
}
export default Back