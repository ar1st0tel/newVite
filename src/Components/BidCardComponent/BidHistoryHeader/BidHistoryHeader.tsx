import classes from "./BidHistoryHeader.module.scss";
import CurrentDateComponent from "@/HelpersComponents/CurrentDateComponent/CurrentDateComponent.tsx";
import * as React from "react";

const BidHistoryHeader: React.FC = () => {
  return (
    <header>
      <div className={classes.bidDate}>
        <span className={classes.title}>History of Bid</span>
        <span className={classes.dateNow}>
          <CurrentDateComponent />
        </span>
      </div>
    </header>
  );
};
export default BidHistoryHeader;
