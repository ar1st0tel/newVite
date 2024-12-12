import classes from "./ContentAndLoading.module.scss";

import Loading from "../../../Pictures/Loading.png";
import ExploreMarketplace from "../../../DesktopComponents/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplace.tsx";

const ContentAndLoading = () => {
  return (
    <div className={classes.contentBack}>
      <ExploreMarketplace />
    </div>
  );
};

export default ContentAndLoading;

const LoadingImg = () => {
  return (
    <div className={classes.loading}>
      <img className={classes.rotate} src={Loading} alt="1" />
    </div>
  );
};
export { LoadingImg };
