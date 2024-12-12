import classes from "../Footer.module.scss";
import Inst from "@/Pictures/Inst.png";
import FB from "@/Pictures/FB.png";
import LinkedIn from "@/Pictures/LinkedIn.png";
import Twitter from "@/Pictures/Twitter.png";
import { NavLink } from "react-router-dom";

const FootLine2 = () => {
  return (
    <div className={classes.logos}>
      <div className={classes.box1}>
        <div>
          <NavLink to="#S">
            <img src={Inst} alt="1" />
          </NavLink>
        </div>
        <div>
          <NavLink to="#S">
            <img src={LinkedIn} alt="1" />
          </NavLink>
        </div>
        <div>
          <NavLink to="#S">
            <img src={FB} alt="1" />
          </NavLink>
        </div>
        <div>
          <NavLink to="#S">
            <img src={Twitter} alt="1" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default FootLine2;
