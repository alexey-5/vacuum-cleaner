import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import { fetchBase } from "../../store/baseSlise";
import styles from "./Home.module.scss";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBase());
  }, []);
  const base = useSelector((state) => state.base.items);
  const category = useSelector((state) => state.base.categories);

  return (
    <section className="container">
      <Categories />
      <div className={styles.home}>
        {category == 0
          ? //рисуем всё
            base.map((el) => <Card {...el} key={el.idImg} />)
          : // рисуем одну категорию
            base
              .filter((item) => item.category == category)
              .map((el) => <Card {...el} key={el.idImg} />)}
      </div>
    </section>
  );
}
export default Home;
