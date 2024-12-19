import { BidListSlice } from "@/ReduxFeatures/BidListSlice/BidListSlice.ts";
import * as React from "react";
import classes from "./BidList.module.scss";
import Verification from "@/Pictures/Verification.png";
import EthereumBig from "@/Pictures/EthereumBig.png";

interface BidListProps {
  bidList: BidListSlice;
}

const BidList: React.FC<BidListProps> = ({ bidList }) => {
  return (
    <div className={classes.line}>
      <div className={classes.left}>
        <div className={classes.logoContainer}>
          <div className={classes.logo}>
            <img src={bidList.picture} alt={bidList.name} />
          </div>
          <div className={classes.verification}>
            <img src={Verification} alt="1" />
          </div>
        </div>
        <div>
          <div className={classes.name}>{bidList.name}</div>
          <div className={classes.date}>
            {bidList.date} at {bidList.time}
          </div>
        </div>
      </div>
      <div className={classes.priceLine}>
        <img src={EthereumBig} alt="" />
        <span className={classes.price}>{bidList.price}</span>
      </div>
    </div>
  );
};

export default BidList;
