import classes from "./TopBannerText.module.scss";
import Stats from "@/HelpersComponents/Stats/Stats.tsx";
import ButtonExplore from "@/HelpersComponents/ButtonsTopBanner/ButtonExplore.tsx";
import ButtonCreate from "@/HelpersComponents/ButtonsTopBanner/ButtonCreate.tsx";
import TrustPilot from "@/pictures/TrustPilot.png";
import TrustPilotName from "@/pictures/TrustPilotName.png";
import Stars from "@/pictures/Stars.png";

const TopBannerText = () => {
  return (
    <div className={classes.left}>
      <div className={classes.heroText}>
        <div className={classes.heroInfo}>Discover And Create NFTs</div>
        <div className={classes.heroContext}>
          <p>Discover, Create and Sell NFTs On Our NFT Marketplace</p>
          <p>
            With Over Thousands Of NFTs And Get a{" "}
            <strong className={classes.black}>$20 bonus.</strong>
          </p>
        </div>
        <div className={classes.buttonGap}>
          <ButtonExplore />
          <ButtonCreate />
        </div>
      </div>
      <div className={classes.trustPilot}>
        <div className={classes.position}>
          <img src={TrustPilot} alt="Green star" />
          <img
            src={TrustPilotName}
            className={classes.imgPosition}
            alt="trustpilot"
          />
        </div>
        <div className={classes.stars}>
          <img src={Stars} alt="stars" />
          <span>4900+</span>
        </div>
      </div>
      <div className={classes.bottom}>
        <Stats />
      </div>
    </div>
  );
};
export default TopBannerText;
