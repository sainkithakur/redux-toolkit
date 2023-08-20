import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, products: [] };

const productReducer = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAction("productList/loading"), (state, action) => {
      state.loading = true;
    });

    builder.addCase(createAction("productList/fulfilled"), (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(createAction("productList/rejected"), (state) => {
      state.loading = false;
    });
  },
});

export default productReducer.reducer;
