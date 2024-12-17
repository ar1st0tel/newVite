import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchCardsAsync } from "@/Api/AsyncThunk/FetchCardsAsync.ts";
import { useEffect } from "react";
import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import ExploreMarketplace from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import LoadingImg from "@/Pages/DiscoverPage/ContentAndLoading/ContentAndLoading.tsx";

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

const PageDiscover = connector(
  ({ cards, isLoaded, isError, isPending, fetchCardsAsync }: Props) => {
    useEffect(() => {
      fetchCardsAsync();
    }, [fetchCardsAsync]);

    if (isPending) {
      return <LoadingImg />;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!cards || cards.length === 0) {
      return <div>Something is wrong!</div>;
    }
    if (isLoaded) {
      return (
        <>
          <NavigationComponent />
          <ExploreMarketplace />
          <LoadingImg />
          <FooterComponent />
        </>
      );
    }
  }
);
export default PageDiscover;
