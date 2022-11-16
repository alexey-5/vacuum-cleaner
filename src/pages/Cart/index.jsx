import styles from "./Cart.module.scss";

function Cart() {
  const cartItems = [
    {
      imageUrl: "5",
      name: "HYUNDAI H-VCH07",
      price: 5990,
      category: 1,
      idImg: 5,
    },
    {
      imageUrl: "6",
      name: "ECON ECO-1442VC",
      price: 2790,
      category: 2,
      idImg: 6,
    },
  ];
  return (
    <div>
      {cartItems.map((el, index) => (
        <div key={index}><img className={styles.img}
        width={130 }
        height={130}
        src={require(`../../img/${el.idImg}.jpg`)}
        alt="Vacuum cleaner"
      />
      <p>{el.name}</p>
      </div>
      ))}
    </div>
  );
}
export default Cart;
