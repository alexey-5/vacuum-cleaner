import { configureStore } from "@reduxjs/toolkit";
import base from './baseSlise'
//import cart from './cartSlise'
//import pizza from './pizzaSlise'

export default configureStore({
   reducer:{
      base,
      //cart,
     // pizza,
   }
})