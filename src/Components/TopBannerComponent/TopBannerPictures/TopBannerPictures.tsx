import classes from "./TopBannerPictures.module.scss";
import Rectangle3 from "@/pictures/Rectangle3.png";
import Arrow from "@/pictures/Arrow.png";
import Dots from "@/pictures/Dots.png";
import Rectangle3Small from "@/pictures/Rectangle3Small.png";

const TopBannerPictures = () => {
  return (
    <div className={classes.right}>
      <div className={classes.containerBigPic}>
        <img className={classes.bigPic} src={Rectangle3} alt="1" />
      </div>
      <div className={classes.smlPics}>
        <div className={classes.row}>
          <img src={Arrow} className={classes.arrow} alt="1" />
          <div className={classes.containerDots}>
            <img src={Dots} className={classes.dots} alt="1" />
          </div>
        </div>
        <div className={classes.containerSmlPic}>
          <img src={Rectangle3Small} className={classes.pic} alt="1" />
        </div>
      </div>
    </div>
  );
};
export default TopBannerPictures;
