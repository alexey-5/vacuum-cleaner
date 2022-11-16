import Card from "../../components/Card"
import Categories from "../../components/Categories"
import styles from "./Home.module.scss"

function Home({baza}){

return(<section className="container">
          <Categories/>
        <div className={styles.home}>
          {
            baza.map(el=><Card {...el} key={el.idImg}/>)
          }
        </div>
      </section>)
}
export default Home