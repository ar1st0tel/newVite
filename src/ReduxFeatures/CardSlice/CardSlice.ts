import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";

export interface CardSlice {
  id: string;
  name: string;
  price: string;
  img: string;
  description?: string;
  owner?: string;
  ownerPic?: string;
  author?: string;
  authorPic?: string;
  timeOfEnd?: string;
}

type initialStateType = {
  isPending: boolean;
  isLoaded: boolean;
  isError: boolean;
  cards: CardSlice[];
};
const initialState: initialStateType = {
  cards: [],
  isPending: false,
  isError: false,
  isLoaded: false,
};

export const CardSlice: Slice<initialStateType> = createSlice({
  name: "SliceOfCards",
  initialState,
  reducers: {
    fetchCards: (
      state: initialStateType,
      action: PayloadAction<CardSlice[]>
    ) => {
      state.cards = action.payload;
    },
    addCard: (state: initialStateType, action: PayloadAction<CardSlice>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardsAsync.pending, (state) => {
      state.isPending = true;
      state.isLoaded = false;
      state.isError = false;
    });
    builder.addCase(fetchCardsAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.isLoaded = true;
      state.isError = false;
      state.cards = [...action.payload];
    });
    builder.addCase(fetchCardsAsync.rejected, (state) => {
      state.isPending = false;
      state.isLoaded = false;
      state.isError = true;
    });
  },
});

export const { addCard, fetchCards } = CardSlice.actions;
export const { reducer: CardReducer } = CardSlice;

// Типизация стора
// Апишка + типизация апишки
// Компонент + типизация => рендер компонента

// 1 метод =  асинхронный  запрос н а сервер (загрузка ВСЕХ карточек) fetchCard
// 2 метод = синхронно добавление 1 карточки addCart
// 3 метод = получил данные из 1 метода => синхронно запихнул их в стейт setCards
