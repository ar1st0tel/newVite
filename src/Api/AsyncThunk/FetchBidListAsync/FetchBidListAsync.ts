import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchBidListApi } from "@/Api/AsyncThunk/FetchBidListAsync/types.ts";

export const fetchBidListAsync = createAsyncThunk(
  "BidHistory/fetchBidHistory",
  async (limit: number | undefined) => {
    const url = limit
      ? `http://localhost:3000/BidList?_limit=${limit}`
      : "http://localhost:3000/BidList";
    const response = await axios.get<FetchBidListApi>(url);
    return response.data;
  }
);
