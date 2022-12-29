import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//createAsyncThunk() — данный метод предназначен для выполнения асинхронных операций: он принимает тип операции и функцию, возвращающую промис, и генерирует преобразователь операции (thunk), который, в свою очередь, отправляет типы операций pending/fulfilled/rejected в частичный редуктор;
 // Функция загрузки файла товаров
export const fetchBase = createAsyncThunk( //AsyncThunk - асинхронный блок
  "base/fetchBaseStatus",                   
  async () => {
    const { data } = await axios(
      `https://636fc33ebb9cf402c81f2d17.mockapi.io/baza`
    );//console.log(data)
    return data;
  });

const baseSlise = createSlice({
  name: "base",
  initialState: {
    items: [],  // весь массив товаров
    loading: 'pending',//'idle' | 'pending' | 'succeeded' | 'failed' // idle -пустой
    categories: 0, // выбор категории
    background: 0,
  },
  reducers: { 
    setCategory(state, action){ // установка категории
      state.categories = action.payload
     },

    setBackground(state){ // установка фона
      if(state.background<7)
      state.background = state.background + 1;
      else(state.background = 0)
     },
   },
  extraReducers:{
    [fetchBase.pending]: (state)=>{
       state.loading = 'pending';
       state.items=[];   // console.log('  Идёт зарузка')
    },
    [fetchBase.fulfilled]: (state, action)=>{
       state.loading = 'succeeded';
       state.items=action.payload; // console.log('  Данные получены')
    },
    [fetchBase.rejected]: (state, action)=>{
       state.loading = 'failed';
       state.items=[];
       console.log('  Ошибка')
    },
  },
});
export const { setCategory, setBackground } = baseSlise.actions;
export default baseSlise.reducer;
