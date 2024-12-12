import classes from "./MobileTopCollection.module.scss";
import ExploreAll from "../../HelpersComponents/ExploreAll/ExploreAll.tsx";
import MobileLineTC from "./MobileLineTC/MobileLineTC.tsx";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { fetchLinesAsync } from "@/Api/AsyncThunk/FetchLinesAsync.ts";
import { useEffect } from "react";

const connector = connect(
  (state: RootState) => ({
    LineArray: state.LineSlice.lines,
    isError: state.LineSlice.isError,
    isPending: state.LineSlice.isPending,
    isLoaded: state.LineSlice.isLoaded,
  }),
  { fetchLinesAsync }
);
type CollectionProps = ConnectedProps<typeof connector>;
export const linesOnPage = 4;
const MobileTopCollection = connector(
  ({
    LineArray,
    isError,
    isPending,
    isLoaded,
    fetchLinesAsync,
  }: CollectionProps) => {
    useEffect(() => {
      fetchLinesAsync(linesOnPage);
    }, [fetchLinesAsync]);

    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!LineArray.length) {
      return <div>There are no collections unfortunately</div>;
    }
    if (isLoaded) {
      return (
        <div className={classes.topCollectionMobile}>
          <div className={classes.title}>
            <span> Top Collection</span>
          </div>
          <div className={classes.tableTopCollection}>
            <span>Collection</span>
            <span>Volume</span>
          </div>
          <div className={classes.lines}>
            {LineArray.map((lineItem: LineSlice) => (
              <MobileLineTC key={lineItem.id} line={lineItem} />
            ))}
          </div>
          <ExploreAll />
        </div>
      );
    }
    return null;
  }
);
export default MobileTopCollection;
