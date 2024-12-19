import { MouseEvent, useRef, useState } from "react";
import classes from "./OptionMobile.module.scss";
import OptionsMobile from "@/Pictures/OptionsMobile.png";
import { NavLink } from "react-router-dom";

const OptionMobile = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const toggleOptions = (event: MouseEvent<HTMLImageElement> | TouchEvent) => {
    event.stopPropagation();
    setShowOptions((prev) => !prev);
  };
  const [selectedItem, setSelectedItem] = useState<string>(() => {
    return localStorage.getItem("selectedItem") || "";
  });
  const changeColor = (item: string) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", item);
    setShowOptions(false);
  };
  return (
    <>
      <img
        className={classes.optionMobile}
        src={OptionsMobile}
        alt="1"
        onClick={toggleOptions}
      />
      {showOptions && (
        <div ref={optionsRef} className={classes.optionsContainer}>
          <NavLink
            to="/discover"
            className={
              selectedItem === "DISCOVER" ? classes.itemBlack : classes.itemGray
            }
            onClick={() => changeColor("DISCOVER")}
          >
            DISCOVER
          </NavLink>
          <NavLink
            to="/creators"
            className={
              selectedItem === "CREATORS" ? classes.itemBlack : classes.itemGray
            }
            onClick={() => changeColor("CREATORS")}
          >
            CREATORS
          </NavLink>
          <NavLink
            to="/sells"
            className={
              selectedItem === "SELLS" ? classes.itemBlack : classes.itemGray
            }
            onClick={() => changeColor("SELLS")}
          >
            SELLS
          </NavLink>
          <NavLink
            to="/stats"
            className={
              selectedItem === "STATS" ? classes.itemBlack : classes.itemGray
            }
            onClick={() => changeColor("STATS")}
          >
            STATS
          </NavLink>
        </div>
      )}
    </>
  );
};
export default OptionMobile;
