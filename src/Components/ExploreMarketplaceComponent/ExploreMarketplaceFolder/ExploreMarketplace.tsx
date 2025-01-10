import classes from "./ExploreMarketplace.module.scss";
import CardCase from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/CardCase/CardCase.tsx";
import ExploreMarketplaceHeader from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceFolder/ExploreMarketplaceHeader/ExploreMarketplaceHeader.tsx";

const ExploreMarketplace = () => {
  return (
    <div className={classes.contentBack}>
      <ExploreMarketplaceHeader />
      <CardCase />
    </div>
  );
};
export default ExploreMarketplace;
