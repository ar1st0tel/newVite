import classes from "./ButtonExploreMarketplace.module.scss";
import React from "react";

export const ButtonExploreMarketplace: React.FC<{
  imgSrc: string;
  name: string;
}> = ({ imgSrc, name }) => {
  return (
    <button className={classes.buttonBorder}>
      <div className={classes.buttonAlign}>
        <img src={imgSrc} className={classes.imgMobile} alt="1" />
        {name}
      </div>
    </button>
  );
};
