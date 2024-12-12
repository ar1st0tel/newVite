import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ILinesApi {
  id: number;
  pic: string;
  name: string;
  author: string;
  volume: string;
  dayPercent: string;
  floorPrice: number;
  owners: number;
  items: number;
}
export type LinesApi = ILinesApi[];

export const fetchLinesAsync = createAsyncThunk(
  "lines/fetchLines",
  async (limit: number | undefined) => {
    const url = limit
      ? `http://localhost:3000/collections?_limit=${limit}`
      : `http://localhost:3000/collections`;
    const response = await axios.get<LinesApi>(url);
    return response.data;
  }
);
