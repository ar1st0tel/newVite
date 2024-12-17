import ExploreMarketplace from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import classes from "./ExploreMarketplaceComponent.module.scss";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import LoadingImg from "@/Pages/DiscoverPage/ContentAndLoading/ContentAndLoading.tsx";
import ExploreAll from "@/HelpersComponents/ExploreAll/ExploreAll.tsx";
import { useMediaQuery } from "react-responsive";

const connector = connect(
  (state: RootState) => ({
    cards: state.CardSlice.cards,
    isLoaded: state.CardSlice.isLoaded,
    isError: state.CardSlice.isError,
    isPending: state.CardSlice.isPending,
  }),
  { fetchCardsAsync }
);
type Props = ConnectedProps<typeof connector>;
let cardsOnPage = 8;
const ExploreMarketplaceComponent = connector(
  ({ cards, isLoaded, isError, isPending, fetchCardsAsync }: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });
    const [message, setMessage] = useState(false);
    useEffect(() => {
      if (isMobile) {
        cardsOnPage = 4;
      }
      fetchCardsAsync(cardsOnPage);
    }, [fetchCardsAsync]);

    useEffect(() => {
      let delay: ReturnType<typeof setTimeout>;
      if (!cards || cards.length === 0) {
        delay = setTimeout(() => {
          setMessage(true);
        }, 1000);
      }
      return () => clearTimeout(delay);
    }, []);

    if (isPending) {
      return <LoadingImg />;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!cards || cards.length === 0) {
      return <div>{message ? "Something is wrong!" : null}</div>;
    }
    if (isLoaded) {
      return (
        <div className={classes.contentBack}>
          <ExploreMarketplace />
          <ExploreAll />
        </div>
      );
    }
    return null;
  }
);
export default ExploreMarketplaceComponent;
