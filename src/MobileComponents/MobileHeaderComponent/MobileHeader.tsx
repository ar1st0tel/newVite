import LogoBlack from "../../Pictures/LogoBlack.png";
import OptionsMobile from "../../Pictures/OptionsMobile.png";
import classes from "./MobileHeader.module.scss";

const MobileHeader = () => {
  return (
    <div className={classes.headerMobile}>
      <div className={classes.leftHeaderMobile}>
        <img src={LogoBlack} alt="1" /> DiveSea
      </div>
      <div className={classes.rightHeaderMobile}>
        <img src={OptionsMobile} alt="1" />
      </div>
    </div>
  );
};
export default MobileHeader;
