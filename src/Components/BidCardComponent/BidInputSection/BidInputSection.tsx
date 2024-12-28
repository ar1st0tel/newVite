import React, { ChangeEvent, useState } from "react";
import classes from "./BidInputSection.module.scss";
import BidPicture from "@/pictures/BidPicture.png";

interface BidInputSectionProps {
  bidValue: string;
  onButtonChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const BidInputSection: React.FC<BidInputSectionProps> = ({
  bidValue,
  onButtonChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={classes.buttonsArea}>
      <label htmlFor="select" className={classes.label}>
        Your Bid
      </label>
      <div className={classes.bidLine}>
        <span className={classes.selectorContainer}>
          <select
            id="select"
            value={selectedOption}
            onChange={handleChange}
            className={classes.selector}
          >
            <option value="option1">ETH</option>
            <option value="option2">USD</option>
            <option value="option3">EUR</option>
          </select>
        </span>
        <input
          id="numberInput"
          className={classes.input}
          type="text"
          value={bidValue}
          onChange={() => onButtonChange}
          placeholder="Enter Your Bid"
        />
      </div>
      <button className={classes.button}>
        <img src={BidPicture} className={classes.buttonImg} alt="$" />
        Submit
      </button>
    </div>
  );
};
export default BidInputSection;
