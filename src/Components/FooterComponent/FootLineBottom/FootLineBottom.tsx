import classes from "./FootLineBottom.module.scss";
import Inst from "@/Pictures/Inst.png";
import FB from "@/Pictures/FB.png";
import LinkedIn from "@/Pictures/LinkedIn.png";
import Twitter from "@/Pictures/Twitter.png";
import { NavLink } from "react-router-dom";

const FootLineBottom = () => {
  return (
    <>
      <div className={classes.box1}>
        <NavLink to="#S">
          <img src={Inst} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={LinkedIn} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={FB} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={Twitter} alt="1" />
        </NavLink>
      </div>
    </>
  );
};
export default FootLineBottom;
