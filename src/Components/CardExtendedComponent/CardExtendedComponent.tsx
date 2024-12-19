import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import CardExtended from "@/Components/CardExtendedComponent/CardExtended/CardExtended.tsx";
import { useEffect } from "react";
import ArrowLeft from "@/Pictures/ArrowLeft.png";
import classes from "./CardExtendedComponent.module.scss";
import CardsFromCreator from "@/Components/CardExtendedComponent/CardsFromCreator/CardsFromCreator.tsx";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Card from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/Card/Card.tsx";

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
const CardExtendedComponent = connector(
  ({
    CardExposed,
    isPending,
    isError,
    isLoaded,
    fetchCardsAsync,
  }: CardExtendedProps) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
      fetchCardsAsync();
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
      const mainCard = CardExposed.find((card) => card.id === id);
      if (!mainCard) return <div>Card does not exist!</div>;
      const restCards = CardExposed.filter(
        (card) => card.author === mainCard.author && card.id !== mainCard.id
      );
      return (
        <>
          <div className={classes.title}>
            <img src={ArrowLeft} alt="1" />
            Product Detail
          </div>
          <CardExtended key={mainCard.id} cardExtended={mainCard} />
          <div className={classes.fromCreatorTitle}>From Creator</div>
          <div className={classes.itemsTable}>
            {!isMobile
              ? restCards
                  .slice(0, 5)
                  .map((itemToShow: CardSlice) => (
                    <CardsFromCreator key={itemToShow.id} card={itemToShow} />
                  ))
              : restCards
                  .slice(0, 3)
                  .map((itemToShow: CardSlice) => (
                    <Card key={itemToShow.id} card={itemToShow} />
                  ))}
          </div>
        </>
      );
    }
  }
);
export default CardExtendedComponent;
