import ExploreMarketplace from "../../DesktopComponents/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";
import ExploreAll from "../../HelpersComponents/ExploreAll/ExploreAll.tsx";
import classes from "./MobileExploreMarketplace.module.scss";

const MobileExploreMarketplace = () => {
  return (
    <div className={classes.location}>
      <ExploreMarketplace />
      <ExploreAll />
    </div>
  );
};
export default MobileExploreMarketplace;
