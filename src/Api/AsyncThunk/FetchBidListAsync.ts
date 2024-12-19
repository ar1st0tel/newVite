import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IFetchBidListApi {
  id: number;
  picture: string;
  name: string;
  price: number;
  date: string;
  time: string;
}

export type FetchBidListApi = IFetchBidListApi[];

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
