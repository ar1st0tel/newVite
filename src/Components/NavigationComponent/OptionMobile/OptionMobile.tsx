import { MouseEvent, useRef, useState } from "react";
import classes from "./OptionMobile.module.scss";
import OptionsMobile from "@/pictures/OptionsMobile.png";
import { NavLink } from "react-router-dom";
import { useSelectNavLine } from "@/Components/NavigationComponent/hooks.ts";
import { links } from "@/Components/NavigationComponent/types.ts";

const OptionMobile = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const toggleOptions = (event: MouseEvent<HTMLImageElement> | TouchEvent) => {
    event.stopPropagation();
    setShowOptions((prev) => !prev);
  };
  const { selectedItem, changeColor } = useSelectNavLine();
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
          {links.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={
                selectedItem === item.name
                  ? classes.itemBlack
                  : classes.itemGray
              }
              onClick={() => changeColor(item.name)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
export default OptionMobile;
