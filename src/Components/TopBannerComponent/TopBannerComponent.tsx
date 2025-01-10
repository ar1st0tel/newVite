import classes from "./TopBannerComponent.module.scss";
import TopBannerPictures from "@/Components/TopBannerComponent/TopBannerPictures/TopBannerPictures.tsx";
import TopBannerText from "@/Components/TopBannerComponent/TopBannerText/TopBannerText.tsx";

const TopBannerComponent = () => {
  const LongDash = () => {
    return <span className={classes.text}>{`—`.repeat(4)}</span>;
  };
  return (
    <div className={classes.content1Back}>
      <div className={classes.bord}></div>
      <div className={classes.creators}>
        <LongDash />
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
