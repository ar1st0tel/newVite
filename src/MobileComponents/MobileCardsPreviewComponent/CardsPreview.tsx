import TopBannerPictures from "@/DesktopComponents/TopBannerComponent/TopBannerComponent.tsx";
import classes from "./CardsPreview.module.scss";

const CardsPreview = () => {
  return (
    <div className={classes.cardsPreview}>
      <TopBannerPictures />
    </div>
  );
};
export default CardsPreview;
