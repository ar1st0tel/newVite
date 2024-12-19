import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchBidListAsync } from "@/Api/AsyncThunk/FetchBidListAsync.ts";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import classes from "@/Pages/TEST_PAGE_FOR_FUTURE_COMPONENTS/TEST.module.scss";
import BidList from "@/Components/BidCardComponent/BidList/BidList.tsx";

const connector = connect(
  (state: RootState) => ({
    isLoaded: state.BidListSlice.isLoaded,
    isError: state.BidListSlice.isError,
    isPending: state.BidListSlice.isPending,
    bidList: state.BidListSlice.bidList,
  }),
  { fetchBidListAsync }
);

type BidListComponentProps = ConnectedProps<typeof connector>;
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
    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!bidList.length) {
      return <div>Bid History was not found</div>;
    }
    if (isLoaded)
      return (
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
  }
);

export default BidListCase;
