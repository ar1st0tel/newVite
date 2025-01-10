import ExploreMarketplace from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync/FetchCardsAsync.ts";
import LoadingElem from "@/HelpersComponents/LoadingElem/LoadingElem.tsx";
import { useIsMobile } from "@/HelpersComponents/helpers/Hooks/useIsMobile.ts";
import {
  cardsOnMobilePage,
  cardsOnPage,
  cardsOnPageDiscover,
} from "@/HelpersComponents/helpers/elementsOnPage.ts";
import { useLocation } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  cards: state.CardSlice.cards,
  isLoaded: state.CardSlice.isLoaded,
  isError: state.CardSlice.isError,
  isPending: state.CardSlice.isPending,
});
const mapDispatchToProps = { fetchCardsAsync };
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;
const ExploreMarketplaceComponent = connector(
  ({ cards, isLoaded, isError, isPending, fetchCardsAsync }: Props) => {
    const isMobile = useIsMobile();
    const location = useLocation();
    const isDiscover: boolean = location.pathname === "/discover";
    const [message, setMessage] = useState(false);
    useEffect(() => {
      fetchCardsAsync(
        isDiscover && isMobile
          ? cardsOnPage
          : isDiscover
            ? cardsOnPageDiscover
            : isMobile
              ? cardsOnMobilePage
              : cardsOnPage
      );
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
    if (isPending) return <LoadingElem />;
    if (isError) return <div>ERROR!</div>;
    if (!cards || cards.length === 0)
      return <div>{message ? "Something is wrong!" : null}</div>;
    if (isLoaded) return <ExploreMarketplace />;
  }
);
export default ExploreMarketplaceComponent;
