import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productList = createAsyncThunk("productList", async () => {
  try {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result.data;
  } catch (error) {
    console.log("something went wrong.  lk");
  }
});
