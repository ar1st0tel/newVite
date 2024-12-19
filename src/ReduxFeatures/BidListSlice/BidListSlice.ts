import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { fetchBidListAsync } from "@/Api/AsyncThunk/FetchBidListAsync.ts";

export interface BidListSlice {
  id: number;
  picture: string;
  name: string;
  price: number;
  date: string;
  time: string;
}

type initialStateType = {
  isLoaded: boolean;
  isPending: boolean;
  isError: boolean;
  bidList: BidListSlice[];
};

const initialState: initialStateType = {
  isLoaded: false,
  isError: false,
  isPending: false,
  bidList: [],
};

export const BidListSlice: Slice<initialStateType> = createSlice({
  name: "BidList",
  initialState,
  reducers: {
    fetchBidList: (
      state: initialStateType,
      action: PayloadAction<BidListSlice[]>
    ) => {
      state.bidList = action.payload;
    },
    addBidList: (
      state: initialStateType,
      action: PayloadAction<BidListSlice>
    ) => {
      state.bidList = [...state.bidList, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBidListAsync.pending, (state) => {
      state.isPending = true;
      state.isLoaded = false;
      state.isError = false;
    });
    builder.addCase(fetchBidListAsync.rejected, (state) => {
      state.isPending = false;
      state.isLoaded = false;
      state.isError = true;
    });
    builder.addCase(fetchBidListAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.isLoaded = true;
      state.isError = false;
      state.bidList = [...action.payload];
    });
  },
});

export const { addBidList, fetchBidList } = BidListSlice.actions;
export const { reducer: BidListReducer } = BidListSlice;
