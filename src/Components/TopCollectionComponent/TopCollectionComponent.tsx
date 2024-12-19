import classes from "./TopCollectionComponent.module.scss";
import TopCollection from "@/Components/TopCollectionComponent/TopCollectionFolder/TopCollection.tsx";

const TopCollectionComponent = () => {
  return (
    <div className={classes.contentBack}>
      <TopCollection />
    </div>
  );
};
export default TopCollectionComponent;
