import { BidListSlice } from "@/ReduxFeatures/BidListSlice/BidListSlice.ts";
import * as React from "react";
import classes from "./BidList.module.scss";
import Verification from "@/pictures/Verification.png";
import EthereumBig from "@/pictures/EthereumBig.png";

interface BidListProps {
  bidList: BidListSlice;
}
const formatDateTime = (date: string, time: string): string =>
  `${date} at ${time}`;

const BidList: React.FC<BidListProps> = ({ bidList }) => {
  return (
    <div className={classes.line}>
      <div className={classes.left}>
        <div className={classes.logoContainer}>
          <div className={classes.logo}>
            <img
              src={bidList.picture}
              className={classes.logoImg}
              alt={bidList.name}
            />
          </div>
          <div className={classes.verification}>
            <img
              src={Verification}
              className={classes.verificationImg}
              alt="1"
            />
          </div>
        </div>
        <div>
          <div className={classes.name}>{bidList.name}</div>
          <div className={classes.date}>
            {formatDateTime(bidList.date, bidList.time)}
          </div>
        </div>
      </div>
      <div className={classes.priceLine}>
        <img src={EthereumBig} className={classes.priceLineImg} alt="" />
        <span className={classes.price}>{bidList.price}</span>
      </div>
    </div>
  );
};

export default BidList;
