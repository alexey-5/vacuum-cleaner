import { createSlice } from "@reduxjs/toolkit";

const likeSlise = createSlice({
   name: "like",
   initialState: {
     arrLike: [], // массив избранного
   },
 
   reducers: {
     addItemLike(state, action) {
       // добавление товара в корзину
       const itemId = state.arrLike.find(
         (elem) => elem.idImg === action.payload.idImg
       );
       if (!itemId) {
         state.arrLike.push(action.payload);
       }
     },
 
     deleteItemLike(state, action) {
       state.arrLike = state.arrLike.filter((el) => el.idImg !== action.payload);
     },
   },
 });
 export const { addItemLike, deleteItemLike } =
   likeSlise.actions;
 export default likeSlise.reducer;