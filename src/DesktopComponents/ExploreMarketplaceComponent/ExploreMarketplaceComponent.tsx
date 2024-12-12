import ExploreMarketplace from "./ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import classes from "./ExploreMarketplaceComponent.module.scss";
import ExploreAll from "../../HelpersComponents/ExploreAll/ExploreAll.tsx";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import { cardsOnPage } from "../../MobilePages/MobileDiscoverPage.tsx";
import { LoadingImg } from "../../DesktopPages/Discover/ContentAndLoading/ContentAndLoading.tsx";

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

const ExploreMarketplaceComponent = connector(
  ({ cards, isLoaded, isError, isPending, fetchCardsAsync }: Props) => {
    const [message, setMessage] = useState(false);
    useEffect(() => {
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
