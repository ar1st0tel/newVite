import classes from "./ExploreMarketplace.module.scss";
import Category from "../../../Pictures/Category.png";
import Collection from "../../../Pictures/Collection.png";
import Price from "../../../Pictures/Price.png";
import { CardCase } from "./CardCase/CardCase.tsx";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ExploreMarketplace = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });
  const location = useLocation();
  const hideButton: boolean = location.pathname === "/Discover" || isMobile;
  const topicNFT: boolean = location.pathname === "/Discover";
  return (
    <>
      <div className={classes.text}>
        {!topicNFT ? (
          <span>Explore Marketplace</span>
        ) : (
          <span>Discover NFTs</span>
        )}
      </div>
      <div className={classes.table}>
        <div className={`${classes.filters} ${classes.buttonBorder}`}>
          {!hideButton && <button className={classes.buttonBorder}>All</button>}
          <button className={classes.buttonBorder}>
            <div className={classes.buttonAlign}>
              <img src={Category} className={classes.imgMobile} alt="1" />
              Category
            </div>
          </button>
          <button className={classes.buttonBorder}>
            <div className={classes.buttonAlign}>
              <img src={Collection} className={classes.imgMobile} alt="1" />
              Collection
            </div>
          </button>
          <button className={classes.buttonBorder}>
            <div className={classes.buttonAlign}>
              <img src={Price} className={classes.imgMobile} alt="1" />
              Price
            </div>
          </button>
        </div>
        <CardCase />
      </div>
    </>
  );
};
export default ExploreMarketplace;