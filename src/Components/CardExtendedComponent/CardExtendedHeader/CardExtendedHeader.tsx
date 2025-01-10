import classes from "./CardExtendedHeader.module.scss";
import ArrowLeft from "@/pictures/ArrowLeft.png";
import React from "react";

interface CardExtendedHeaderProps {
  goBack: () => void;
}

const CardExtendedHeader: React.FC<CardExtendedHeaderProps> = ({ goBack }) => {
  return (
    <div className={classes.title}>
      <img
        className={classes.titleImg}
        src={ArrowLeft}
        alt="1"
        onClick={goBack}
      />
      Product Detail
    </div>
  );
};
export default CardExtendedHeader;
