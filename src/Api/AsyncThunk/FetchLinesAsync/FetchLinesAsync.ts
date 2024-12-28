import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LinesApi } from "@/Api/AsyncThunk/FetchLinesAsync/types.ts";

export const fetchLinesAsync = createAsyncThunk(
  "lines/fetchLines",
  async (limit?: number) => {
    const url = limit
      ? `http://localhost:3000/collections?_limit=${limit}`
      : `http://localhost:3000/collections`;
    const response = await axios.get<LinesApi>(url);
    return response.data;
  }
);
