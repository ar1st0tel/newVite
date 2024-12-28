import { useLocation } from "react-router-dom";
import classes from "./ExploreMarketplaceHeader.module.scss";
import Category from "@/pictures/Category.png";
import Collection from "@/pictures/Collection.png";
import Price from "@/pictures/Price.png";
import { useIsMobile } from "@/HelpersComponents/helpers/Hooks/useIsMobile.ts";

const ExploreMarketplaceHeader = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const hideButton: boolean = location.pathname === "/discover" || isMobile;
  const topicNFT: boolean = location.pathname === "/discover";
  return (
    <>
      <div className={classes.text}>
        {!topicNFT ? (
          <span className={classes.mobileTitle}>Explore Marketplace</span>
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
      </div>
    </>
  );
};
export default ExploreMarketplaceHeader;