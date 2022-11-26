import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import styles from "./One.module.scss";

function One() {
  const { imageUrl } = useParams();
  const base = useSelector((state)=>state.base.items)
  const item = base.find((el)=>el.imageUrl===imageUrl); 
  //console.log(base)
  //console.log(item)
  return (
   <section className="container">
    <div className={styles.one}>
      <img 
        className={styles.img}
        width={400}
        height={400}
        src={require(`../../img/${imageUrl}.jpg`)}
       alt={item.name} 
      />
      <div className={styles.info}>
         <h3 >{item.name} </h3>
        <span>{item.price} руб.</span>
        <p>Это чрезвычайно проворный пылесос дающий вам полную свободу движения. Компактный и легкий, его легко хранить не занимая лишнего места.Хранящиеся на корпусе насадки добавляют ему удобство использования.</p>
      </div>
    </div>
      <Back/>
      </section>
  );
}
export default One;
