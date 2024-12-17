import classes from "./TopBannerComponent.module.scss";
import TopBannerPictures from "@/Components/TopBannerComponent/TopBannerPictures/TopBannerPictures.tsx";
import TopBannerText from "@/Components/TopBannerComponent/TopBannerText/TopBannerText.tsx";

const TopBannerComponent = () => {
  return (
    <div className={classes.content1Back}>
      <div className={classes.bord}></div>
      <div className={classes.creators}>
        <span>&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;</span>
        <span className={classes.letterSapce}>OVER 1M CREATORS</span>
      </div>
      <div className={classes.table}>
        <TopBannerText />
        <TopBannerPictures />
      </div>
    </div>
  );
};
export default TopBannerComponent;
