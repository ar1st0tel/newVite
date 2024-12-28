import { BidListSlice } from "@/ReduxFeatures/BidListSlice/BidListSlice.ts";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import classes from "./RenderBidList.module.scss";
import BidList from "@/Components/BidCardComponent/BidList/BidList.tsx";

export const RenderBidList = ({
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
    height={isMobile ? 265 : 330}
  >
    {({ index, style }: ListChildComponentProps) => (
      <div key={bidList[index].id} style={style}>
        <BidList key={bidList[index].id} bidList={bidList[index]} />
      </div>
    )}
  </List>
);
