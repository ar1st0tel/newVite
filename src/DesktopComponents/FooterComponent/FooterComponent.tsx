import classes from "./FooterComponent.module.scss";
import FootLineTop from "./FootLineTop/FootLineTop.tsx";
import FootLineBottom from "./FootLineBottom/FootLineBottom.tsx";
import LogoWhite from "../../Pictures/LogoWhite.png";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className={classes.appWrapper}>
      <div className={classes.table}>
        <div className={classes.line1}>
          <NavLink className={classes.link} to="#S">
            <div className={classes.whiteLogo}>
              <img src={LogoWhite} alt="1" /> DiveSea
            </div>
          </NavLink>
          <FootLineTop />
        </div>
        <div className={classes.line2}>
          <div className={classes.rights}>
            © 2023 EATLY All Rights Reserved.
          </div>
          <FootLineBottom />
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
