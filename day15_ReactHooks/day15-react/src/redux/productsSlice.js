import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const updateProduct = createAsyncThunk(
  "products/update",
  async (product) => {
    const updated = { ...product, price: product.price + 1 };
    await axios.put(`${API}/${product.id}`, updated);
    return updated;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index >= 0) state.items[index] = action.payload;
      });
  },
});

export default productsSlice.reducer;
