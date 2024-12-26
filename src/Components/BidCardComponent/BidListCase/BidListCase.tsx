import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchBidListAsync } from "@/Api/AsyncThunk/FetchBidListAsync/FetchBidListAsync.ts";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import classes from "./BidListCase.module.scss";
import BidList from "@/Components/BidCardComponent/BidList/BidList.tsx";
import { BidListSlice } from "@/ReduxFeatures/BidListSlice/BidListSlice.ts";

const mapStateToProps = (state: RootState) => ({
  isLoaded: state.BidListSlice.isLoaded,
  isError: state.BidListSlice.isError,
  isPending: state.BidListSlice.isPending,
  bidList: state.BidListSlice.bidList,
});
const mapDispatchToProps = { fetchBidListAsync };

const connector = connect(mapStateToProps, mapDispatchToProps);

type BidListComponentProps = ConnectedProps<typeof connector>;
const RenderBidList = ({
  bidList,
  isMobile,
}: {
  bidList: Array<BidListSlice>;
  isMobile: boolean;
}) => (
  <List
    className={classes.list}
    itemCount={bidList.length}
    itemSize={isMobile ? 90 : 110}
    width="100%"
    height={isMobile ? 255 : 330}
  >
    {({ index, style }: ListChildComponentProps) => (
      <div key={bidList[index].id} style={style}>
        <BidList key={bidList[index].id} bidList={bidList[index]} />
      </div>
    )}
  </List>
);
const BidListCase = connector(
  ({
    isLoaded,
    isError,
    isPending,
    bidList,
    fetchBidListAsync,
  }: BidListComponentProps) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });
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
