import { createSlice } from "@reduxjs/toolkit";

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
          item.id === action.payload.id && item.size === action.payload.size
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
    dbProducts: (state, action) => {
      state.products = action.payload.resdbCart.cartItems;
      state.quantity = action.payload.resdbCart.quantity[0].quantity;
      state.total = action.payload.resdbCart.price[0].TOTAL;
    },
  },
});

export const { addProduct, dbProducts } = cartSlice.actions;
export default cartSlice.reducer;
