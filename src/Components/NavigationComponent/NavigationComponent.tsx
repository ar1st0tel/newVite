import classes from "./NavigationComponent.module.scss";
import LogoBlack from "@/Pictures/LogoBlack.png";
import NavigationTitles from "@/Components/NavigationComponent/NavigationTitles/NavigationTitles.tsx";
import SearchArea from "@/Components/NavigationComponent/SearchArea/SearchArea.tsx";
import { NavLink } from "react-router-dom";
import OptionsMobile from "@/Pictures/OptionsMobile.png";

const NavigationComponent = () => {
  return (
    <div className={classes.headerBack}>
      <div className={classes.box}>
        <NavLink to="/">
          <div className={classes.logoMobile}>
            <img className={classes.imgMobile} src={LogoBlack} alt="1" />
            <span className={classes.name}>DiveSea</span>
          </div>
        </NavLink>
        <NavigationTitles />
        <SearchArea />
        <button className={classes.boxWallet}>CONNECT WALLET</button>
        <img className={classes.optionMobile} src={OptionsMobile} alt="1" />
      </div>
    </div>
  );
};
export default NavigationComponent;
