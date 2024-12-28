import classes from "./CardExtendedAuthor.module.scss";
import React from "react";

export const CardExtendedAuthor: React.FC<{
  imgSrc: string | undefined;
  label: string;
  name: string | undefined;
}> = ({ imgSrc, label, name }) => {
  return (
    <div className={classes.author}>
      <div className={classes.authorImgContainer}>
        <img
          className={classes.authorImgContainerPic}
          src={imgSrc}
          alt={name}
        />
      </div>
      <span>
        <div className={classes.grayText}>{label}</div> {/*Created by*/}
        <div className={classes.blackText}>{name}</div>
      </span>
    </div>
  );
};
