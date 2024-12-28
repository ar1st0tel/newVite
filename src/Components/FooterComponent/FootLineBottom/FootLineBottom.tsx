import classes from "./FootLineBottom.module.scss";
import Inst from "@/pictures/Inst.png";
import FB from "@/pictures/FB.png";
import LinkedIn from "@/pictures/LinkedIn.png";
import Twitter from "@/pictures/Twitter.png";
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
