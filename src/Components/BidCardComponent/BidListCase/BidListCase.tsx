import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchBidListAsync } from "@/Api/AsyncThunk/FetchBidListAsync/FetchBidListAsync.ts";
import { useEffect } from "react";
import { RenderBidList } from "@/Components/BidCardComponent/RenderBidList/RenderBidList.tsx";
import { useIsMobile } from "@/HelpersComponents/helpers/Hooks/useIsMobile.ts";

const mapStateToProps = (state: RootState) => ({
  isLoaded: state.BidListSlice.isLoaded,
  isError: state.BidListSlice.isError,
  isPending: state.BidListSlice.isPending,
  bidList: state.BidListSlice.bidList,
});
const mapDispatchToProps = { fetchBidListAsync };

const connector = connect(mapStateToProps, mapDispatchToProps);

type BidListComponentProps = ConnectedProps<typeof connector>;

const BidListCase = connector(
  ({
    isLoaded,
    isError,
    isPending,
    bidList,
    fetchBidListAsync,
  }: BidListComponentProps) => {
    const isMobile = useIsMobile();
    useEffect(() => {
      fetchBidListAsync();
    }, []);
    if (isPending) return <div>...loading...</div>;
    if (isError) return <div>ERROR!</div>;
    if (!bidList.length) return <div>Bid History was not found</div>;
    if (isLoaded)
      return <RenderBidList bidList={bidList} isMobile={isMobile} />;
  }
);

export default BidListCase;
