import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { fetchLinesAsync } from "@/Api/AsyncThunk/FetchLinesAsync.ts";

export interface LineSlice {
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

type initialStateType = {
  isPending: boolean;
  isLoaded: boolean;
  isError: boolean;
  lines: LineSlice[];
};

const initialState: initialStateType = {
  isPending: false,
  isLoaded: false,
  isError: false,
  lines: [],
};

export const LineSlice: Slice<initialStateType> = createSlice({
  name: "SliceOfLines",
  initialState,
  reducers: {
    fetchLines: (
      state: initialStateType,
      action: PayloadAction<LineSlice[]>
    ) => {
      state.lines = action.payload;
    },
    addLine: (state: initialStateType, action: PayloadAction<LineSlice>) => {
      state.lines = [...state.lines, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLinesAsync.pending, (state) => {
      state.isPending = true;
      state.isLoaded = false;
      state.isError = false;
    });
    builder.addCase(fetchLinesAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.isLoaded = true;
      state.isError = false;
      state.lines = [...action.payload];
    });
    builder.addCase(fetchLinesAsync.rejected, (state) => {
      state.isPending = false;
      state.isLoaded = false;
      state.isError = true;
    });
  },
});

export const { fetchLines, addLine } = LineSlice.actions;
export const { reducer: LineReducer } = LineSlice;
