import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CardsApi } from "@/Api/AsyncThunk/FetchCardsAsync/types.ts";

export const fetchCardsAsync = createAsyncThunk(
  "CardSlice/fetchCards",
  async (limit?: number) => {
    const url = limit
      ? `http://localhost:3000/items?_limit=${limit}`
      : `http://localhost:3000/items`;
    const response = await axios.get<CardsApi>(url);
    return response.data;
  }
);
