import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { CardReducer } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { LineReducer } from "@/ReduxFeatures/LineSlice/LineSlice.ts";
import { BidListReducer } from "@/ReduxFeatures/BidListSlice/BidListSlice.ts";

const reducers = combineReducers({
  CardSlice: CardReducer,
  LineSlice: LineReducer,
  BidListSlice: BidListReducer,
});
export const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
