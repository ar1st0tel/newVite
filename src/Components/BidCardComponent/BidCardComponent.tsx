import { useState } from "react";
import * as React from "react";
import classes from "./BidCardComponent.module.scss";
import CurrentDateComponent from "@/HelpersComponents/CurrentDateComponent/CurrentDateComponent.tsx";
import BidPicture from "@/Pictures/BidPicture.png";
import BidListCase from "@/Components/BidCardComponent/BidListCase/BidListCase.tsx";

const BidCardComponent = () => {
  const [valid, setValid] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue.startsWith(".")) {
      inputValue = inputValue.substring(1);
    }
    const validInput = /^[0-9]*\.?[0-9]{0,2}$/;
    if (validInput.test(inputValue)) {
      setValid(inputValue);
    }
  };
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={classes.bidContent}>
      <div className={classes.bidCardContainer}>
        <div className={classes.bidDate}>
          <span className={classes.title}>History of Bid</span>
          <span className={classes.dateNow}>
            <CurrentDateComponent />
          </span>
        </div>
        <BidListCase />
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
              value={valid}
              onChange={handleInputChange}
              placeholder="Enter Your Bid"
            />
          </div>
          <button className={classes.button}>
            <img src={BidPicture} alt="$" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidCardComponent;
