import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import CardExtended from "../CardExtended/CardExtended.tsx";
import { useEffect } from "react";
import ArrowLeft from "@/Pictures/ArrowLeft.png";
import classes from "./CardExtendedComponent.module.scss";

const connector = connect(
  (state: RootState) => ({
    CardExposed: state.CardSlice.cards,
    isLoaded: state.CardSlice.isLoaded,
    isPending: state.CardSlice.isPending,
    isError: state.CardSlice.isError,
  }),
  { fetchCardsAsync }
);
type CardExtendedProps = ConnectedProps<typeof connector>;
const CardExtendedOnPage = 1;
const CardExtendedComponent = connector(
  ({
    CardExposed,
    isPending,
    isError,
    isLoaded,
    fetchCardsAsync,
  }: CardExtendedProps) => {
    useEffect(() => {
      fetchCardsAsync(CardExtendedOnPage);
    }, [fetchCardsAsync]);
    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!CardExposed.length) {
      return <div>There are no cards unfortunately</div>;
    }
    if (isLoaded) {
      return (
        <>
          <div className={classes.title}>
            <img src={ArrowLeft} alt="1" />
            Product Detail
          </div>
          {CardExposed.map((ItemToShow: CardSlice) => (
            <CardExtended key={ItemToShow.id} cardExtended={ItemToShow} />
          ))}
        </>
      );
    }
  }
);
export default CardExtendedComponent;
