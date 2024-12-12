import classes from "./TopBannerComponent.module.scss";
import TopBannerPictures from "@/DesktopComponents/TopBannerComponent/TopBannerPictures/TopBannerPictures.tsx";
import TopBannerText from "@/DesktopComponents/TopBannerComponent/TopBannerText/TopBannerText.tsx";

const TopBannerComponent = () => {
  return (
    <div className={classes.content1Back}>
      <div className={classes.table}>
        <TopBannerText />
        <TopBannerPictures />
      </div>
    </div>
  );
};
export default TopBannerComponent;
