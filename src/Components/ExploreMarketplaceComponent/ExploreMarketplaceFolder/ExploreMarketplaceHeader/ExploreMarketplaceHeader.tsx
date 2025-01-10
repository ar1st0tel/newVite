import { useLocation } from "react-router-dom";
import classes from "./ExploreMarketplaceHeader.module.scss";
import Category from "@/pictures/Category.png";
import Collection from "@/pictures/Collection.png";
import Price from "@/pictures/Price.png";
import { useIsMobile } from "@/HelpersComponents/helpers/Hooks/useIsMobile.ts";
import { ButtonExploreMarketplace } from "@/HelpersComponents/ButtonExploreMarketplace/ButtonExploreMarketplace.tsx";

const ExploreMarketplaceHeader = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const hideButton: boolean = location.pathname === "/discover" || isMobile;
  const isDiscover: boolean = location.pathname === "/discover";
  return (
    <>
      <div className={classes.text}>
        {!isDiscover ? (
          <span className={classes.mobileTitle}>Explore Marketplace</span>
        ) : (
          <span>Discover NFTs</span>
        )}
      </div>
      <div className={classes.table}>
        <div className={`${classes.filters} ${classes.buttonBorder}`}>
          {!hideButton && <button className={classes.buttonBorder}>All</button>}
          <ButtonExploreMarketplace imgSrc={Category} name="Category" />
          <ButtonExploreMarketplace imgSrc={Collection} name="Collection" />
          <ButtonExploreMarketplace imgSrc={Price} name="Price" />
        </div>
      </div>
    </>
  );
};
export default ExploreMarketplaceHeader;
