import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";
import {CardReducer} from "../CardSlice/CardSlice";
import {LineReducer} from "../LineSlice/LineSlice";


const reducers = combineReducers({
    CardSlice: CardReducer,
    LineSlice: LineReducer
})
export const Store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export       const useAppSelector = useSelector.withTypes<RootState>()