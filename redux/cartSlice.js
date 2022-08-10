import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exist = !!state.products.find(
        (item) =>
          item.products_id === action.payload.products_id &&
          item.size === action.payload.size
      );
      console.log(exist);
      if (exist) {
        state.products = [...state.products];
        state.quantity += action.payload.quantity;
        state.total += action.payload.price * state.quantity;
      } else {
        state.quantity = state.quantity + action.payload.quantity;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
