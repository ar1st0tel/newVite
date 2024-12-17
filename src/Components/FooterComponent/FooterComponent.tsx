import classes from "./FooterComponent.module.scss";
import LogoWhite from "@/Pictures/LogoWhite.png";
import { NavLink } from "react-router-dom";
import FootLineTop from "@/Components/FooterComponent/FootLineTop/FootLineTop.tsx";
import FootLineBottom from "@/Components/FooterComponent/FootLineBottom/FootLineBottom.tsx";

const FooterComponent = () => {
  return (
    <div className={classes.table}>
      <div className={classes.line1}>
        <NavLink className={classes.link} to="#S">
          <div className={classes.whiteLogo}>
            <img className={classes.wavesWhite} src={LogoWhite} alt="1" />{" "}
            DiveSea
          </div>
        </NavLink>
        <FootLineTop />
      </div>
      <div className={classes.line2}>
        <div className={classes.rights}>© 2023 EATLY All Rights Reserved.</div>
        <FootLineBottom />
      </div>
      <div className={classes.line3}>© 2023 DiveSea All Rights Reserved.</div>
    </div>
  );
};
export default FooterComponent;
