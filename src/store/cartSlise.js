import { createSlice } from "@reduxjs/toolkit";
// == Загрузка корзины из localStorage
const json1 = localStorage.getItem("cartVacuumCleaner");
const json = json1 ? JSON.parse(json1) : [];
// console.log(json);
const cartSlise = createSlice({
  name: "cart",
  initialState: {
    arrCart: json, // массив корзины
    sum: json.reduce((akk, elem) => akk + elem.price * elem.count, 0), // стоимость корзины
  },

  reducers: {
    addItem(state, action) {
      // добавление товара в корзину
      const itemId = state.arrCart.find(
        (elem) => elem.idImg === action.payload.idImg
      );
      if (itemId) {
        //если товар уже есть в корзине
        itemId.count = itemId.count + 1;
      } else {
        //при добавлении товара добавляем свойство  count:
        state.arrCart.push({ ...action.payload, count: 1 });
      }

      state.sum = state.arrCart.reduce(
        //подсчёт стоимости
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },

    deleteItem(state, action) {
      state.item = state.item.filter((el) => el.id !== action.payload);
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
      // console.log(action.payload)
    },

    deleteAll(state) {
      if (window.confirm("Подтвердите удаление!")) {
        //вывод запроса на удаление
        state.item = [];
        state.sum = 0;
      }
      // console.log(action.payload)
    },

    plus(state, action) {
      const itemId = state.item.find((elem) => elem.id === action.payload);
      if (itemId) {
        itemId.count += 1;
      }
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },

    minus(state, action) {
      let itemId = state.item.find((elem) => elem.id === action.payload);
      if (itemId && itemId.count > 1) {
        itemId.count = itemId.count - 1;
      }
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },
  },
});
export const { addItem, deleteItem, deleteAll, plus, minus } =
  cartSlise.actions;
export default cartSlise.reducer;
