import classes from "./CardExtendedHeader.module.scss";
import ArrowLeft from "@/Pictures/ArrowLeft.png";
import React from "react";

interface CardExtendedHeaderProps {
  goBack: () => void;
}

const CardExtendedHeader: React.FC<CardExtendedHeaderProps> = ({
  goBack,
}: CardExtendedHeaderProps) => {
  return (
    <div className={classes.title}>
      <img src={ArrowLeft} alt="1" onClick={goBack} />
      Product Detail
    </div>
  );
};
export default CardExtendedHeader;
