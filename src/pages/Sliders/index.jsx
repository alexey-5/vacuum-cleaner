import { useSelector } from 'react-redux'
import Back from '../../components/Back'
import styles from './Sliders.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   const base = useSelector((state) => state.base.items)
   return (
      <>
         <div className={styles.wrapper}>

            <Slider {...settings}>
               {base.map((el) =>
                  <div className={styles.card} key={el.idImg} >
                     <img /* width="400"  height="400" */ src={require(`../../img/${el.idImg}.jpg`)} />
                     <h5>{el.name}</h5>
                  </div>)}
            </Slider>
             
         </div>
         <Back />
      </>

   )
}
export default Sliders