import classes from "./NavigationTitles.module.scss";
import { NavLink } from "react-router-dom";
import { useSelectNavLine } from "@/Components/NavigationComponent/hooks.ts";
import { links } from "@/Components/NavigationComponent/types.ts";

const NavigationTitles = () => {
  const { selectedItem, changeColor } = useSelectNavLine();
  return (
    <div className={classes.nav}>
      <div className={classes.boxSmall}>
        {links.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={
              selectedItem === item.name ? classes.itemBlack : classes.itemGray
            }
            onClick={() => changeColor(item.name)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default NavigationTitles;
