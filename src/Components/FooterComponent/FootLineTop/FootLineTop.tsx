import classes from "./FootLineTop.module.scss";
import { NavLink } from "react-router-dom";

const FootLineTop = () => {
  return (
    <>
      <div className={classes.box}>
        <NavLink className={classes.link} to="#S">
          Privacy Policy
        </NavLink>
        <NavLink className={classes.link} to="#S">
          Team & Conditions
        </NavLink>
        <NavLink className={classes.link} to="#S">
          About Us
        </NavLink>
        <NavLink className={classes.link} to="#S">
          Contact
        </NavLink>
      </div>
    </>
  );
};
export default FootLineTop;
