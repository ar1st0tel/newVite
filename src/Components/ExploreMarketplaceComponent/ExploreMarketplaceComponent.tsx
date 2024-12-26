import ExploreMarketplace from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync/FetchCardsAsync.ts";
import { useMediaQuery } from "react-responsive";
import LoadingElem from "@/HelpersComponents/LoadingElem/LoadingElem.tsx";

const mapStateToProps = (state: RootState) => ({
  cards: state.CardSlice.cards,
  isLoaded: state.CardSlice.isLoaded,
  isError: state.CardSlice.isError,
  isPending: state.CardSlice.isPending,
});
const mapDispatchToProps = { fetchCardsAsync };
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;
let cardsOnPage = 8;
const ExploreMarketplaceComponent = connector(
  ({ cards, isLoaded, isError, isPending, fetchCardsAsync }: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });
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
    if (isPending) return <LoadingElem />;
    if (isError) return <div>ERROR!</div>;
    if (!cards || cards.length === 0)
      return <div>{message ? "Something is wrong!" : null}</div>;
    if (isLoaded) return <ExploreMarketplace />;
  }
);
export default ExploreMarketplaceComponent;
