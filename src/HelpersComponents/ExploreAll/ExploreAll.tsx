import classes from "./ExploreAll.module.scss";
import { NavLink } from "react-router-dom";

const ExploreAll = () => {
  return (
    <div className={classes.explore}>
      <NavLink className={classes.link} to="#S">
        Explore All →
      </NavLink>
    </div>
  );
};
export default ExploreAll;
