import classes from "./TopBannerText.module.scss";
import Stats from "@/HelpersComponents/stats/Stats.tsx";
import ButtonExplore from "@/HelpersComponents/ExploreAndCreateButtonsTopBanner/ButtonExplore.tsx";
import ButtonCreate from "@/HelpersComponents/ExploreAndCreateButtonsTopBanner/ButtonCreate.tsx";

const TopBannerText = () => {
  return (
    <div className={classes.left}>
      <div className={classes.bord}></div>
      <div className={classes.top}>
        <div className={classes.heroText}>
          <div className={classes.heroInfo}>
            Discover And <div> Create NFTs</div>
          </div>
          <div className={classes.heroContext}>
            <div>Discover, Create and Sell NFTs On Our NFT Marketplace</div>
            <div>
              With Over Thousands Of NFTs And Get a{" "}
              <strong className={classes.black}>$20 bonus.</strong>
            </div>
          </div>
          <div className={classes.buttonGap}>
            <ButtonExplore />
            <ButtonCreate />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Stats />
      </div>
    </div>
  );
};
export default TopBannerText;
