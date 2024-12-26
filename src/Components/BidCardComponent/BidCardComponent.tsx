import { useState } from "react";
import * as React from "react";
import classes from "./BidCardComponent.module.scss";
import BidListCase from "@/Components/BidCardComponent/BidListCase/BidListCase.tsx";
import BidHistoryHeader from "@/Components/BidCardComponent/BidHistoryHeader/BidHistoryHeader.tsx";
import BidInputSection from "@/Components/BidCardComponent/BidInputSection/BidInputSection.tsx";

const useBidInput = (initialValue: string = "") => {
  const [bidValue, setBidValue] = useState(initialValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue.startsWith(".")) {
      inputValue = inputValue.substring(1);
    }
    const validInput = /^[0-9]*\.?[0-9]{0,2}$/;
    if (validInput.test(inputValue)) {
      setBidValue(inputValue);
    }
  };
  return { bidValue, onChange: handleInputChange };
};

const BidCardComponent = () => {
  const bidInput = useBidInput("");
  return (
    <div className={classes.bidContent} id="modalWindow">
      <BidHistoryHeader />
      <BidListCase />
      <BidInputSection
        bidValue={bidInput.bidValue}
        onButtonChange={() => bidInput.onChange}
      />
    </div>
  );
};

export default BidCardComponent;
