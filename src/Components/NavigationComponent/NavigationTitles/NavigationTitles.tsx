import classes from "./NavigationTitles.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavigationTitles = () => {
  const [selectedItem, setSelectedItem] = useState<string>(() => {
    return localStorage.getItem("selectedItem") || "";
  });
  const changeColor = (item: string) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", item);
  };
  return (
    <div className={classes.nav}>
      <div className={classes.boxSmall}>
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
    </div>
  );
};
export default NavigationTitles;
