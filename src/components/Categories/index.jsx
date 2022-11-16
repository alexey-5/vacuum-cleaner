import styles from "./Categories.module.scss"

function Categories(){
 const categories = ["Все","Вертикальные","Контейнерные","Мешковые"]
   return(
     <div>
      {categories.map((el,index)=><button key={index} className={styles.button}>{el}</button>)}
     </div>
   )
}
export default Categories