import classes from "../../DevicesVersions/MobileVersion/MobileVersion.module.scss"
import ExploreAll from "../../HelpersComponents/ExploreAll/ExploreAll.tsx";
import MobileLineTC from "./MobileLineTC.tsx";
import {LineSlice} from "../../ReduxFeatures/LineSlice/LineSlice.ts";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../ReduxFeatures/Store/Store.ts";
import {fetchLinesAsync} from "../../Api/AsyncThunk/FetchLinesAsync.ts";
import {useEffect} from "react";

const connector = connect(
    (state: RootState) => ({
        LineArray: state.LineSlice.lines,
        isError: state.LineSlice.isError,
        isPending: state.LineSlice.isPending,
        isLoaded: state.LineSlice.isLoaded
    }), {fetchLinesAsync}
);
type CollectionProps = ConnectedProps<typeof connector>
const MobileTopCollection = connector(({LineArray, isError, isPending, isLoaded, fetchLinesAsync}: CollectionProps) => {
    useEffect(() => {
            fetchLinesAsync(4)

    },[fetchLinesAsync]);

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
        return (<div className={classes.topCollectionMobile}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 40,
                    fontSize: 30,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    color: "#141416",
                }}>
                    <span> Top Collection</span>
                </div>
                <div className={classes.tableTopCollection}>
                <span>
                    Collection
                </span>
                    <span>
                    Volume
                </span>
                </div>
                <div className={classes.lines}>
                    {LineArray.map((lineItem: LineSlice) => (
                            <MobileLineTC
                                key={lineItem.id}
                                id={lineItem.id}
                                pic={lineItem.pic}
                                name={lineItem.name}
                                author={lineItem.author}
                                volume={lineItem.volume}
                                dayPercent={lineItem.dayPercent}
                            />
                        )
                    )}
                </div>
                <ExploreAll/>
            </div>
        )
    }
    return null
})
export default MobileTopCollection;