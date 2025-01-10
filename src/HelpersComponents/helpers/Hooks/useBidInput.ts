import { useState } from "react";
import * as React from "react";

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
export default useBidInput;
