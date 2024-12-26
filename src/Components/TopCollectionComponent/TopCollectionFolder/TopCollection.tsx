import classes from "./TopCollection.module.scss";
import { connect, ConnectedProps } from "react-redux";
import { fetchLinesAsync } from "@/Api/AsyncThunk/FetchLinesAsync/FetchLinesAsync.ts";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";
import { useEffect } from "react";
import TableTitle from "@/Components/TopCollectionComponent/TopCollectionFolder/TableTitle/TableTitle.tsx";
import LineTC from "@/Components/TopCollectionComponent/TopCollectionFolder/LineTC/LineTC.tsx";

const mapStateToProps = (state: RootState) => ({
  LineArray: state.LineSlice.lines,
  isError: state.LineSlice.isError,
  isPending: state.LineSlice.isPending,
  isLoaded: state.LineSlice.isLoaded,
});
const mapDispatchToProps = { fetchLinesAsync };
const connector = connect(mapStateToProps, mapDispatchToProps);

type CollectionProps = ConnectedProps<typeof connector>;
const linesOnPage = 4;
const TopCollection = connector(
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

    if (isPending) return <div>...loading...</div>;
    if (isError) return <div>ERROR!</div>;
    if (!LineArray.length)
      return <div>There are no collections unfortunately</div>;

    if (isLoaded)
      return (
        <div className={classes.contentBack}>
          <TableTitle />
          <>
            {LineArray.map((lineItem: LineSlice) => (
              <LineTC key={lineItem.id} line={lineItem} />
            ))}
          </>
        </div>
      );
  }
);

export default TopCollection;
