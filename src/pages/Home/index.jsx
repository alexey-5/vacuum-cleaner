import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import { fetchBase } from "../../store/baseSlise";
import styles from "./Home.module.scss";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchBase());
  }, []);
  const base = useSelector((state) => state.base.items);
  const category = useSelector((state) => state.base.categories);
  const [sort, setSort] = useState(true);

  let clone = []; // клонирование массива
  for (let key in base) {
    clone[key] = base[key];
  }
  if (sort) {
    //сортировка объектов по цене
    clone.sort((a, b) => a.price - b.price); //возрастание
  } else {
    clone.sort((a, b) => b.price - a.price); //убывание
  }
  return (
    <section className="container">
      <Categories />
      {!category && (
        <div className={styles.home}>
          <div className={styles.search}>
            <img
              src={require("../../img/search.svg").default}
              width="27"
              height="27"
            />
            <input // поиск только в категории "все"
              className={styles.input}
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.sort}>
            <img
              src={require("../../img/arr-top.svg").default}
              width="27"
              height="27"
              onClick={() => setSort(true)}
            />
            по цене
            <img
              src={require("../../img/arr-bottom.svg").default}
              width="27"
              height="27"
              onClick={() => setSort(false)}
            />
          </div>
        </div>
      )}
      <div className={styles.home}>
        {category === 0
          ? //рисуем всё
            clone
              .filter((el) =>
                el.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((el) => <Card {...el} key={el.idImg} />)
          : // рисуем одну категорию
            clone
              .filter((item) => item.category === category)
              .map((el) => <Card {...el} key={el.idImg} />)}
      </div>
    </section>
  );
}
export default Home;
