import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  isSidebarOpen: false,
  totalCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cartItems.push(item);
      state.totalPrice += item.price;
      state.totalCart += 1;
      state.isSidebarOpen = true;
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { addToCart, setSidebarOpen } = cartSlice.actions;
export default cartSlice.reducer;
