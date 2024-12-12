import NavigationComponent from "../DesktopComponents/NavigationComponent/NavigationComponent.tsx";
import TopBannerComponent from "../DesktopComponents/TopBannerComponent/TopBannerComponent.tsx";
import TopCollectionComponent from "../DesktopComponents/TopCollectionComponent/TopCollectionComponent.tsx";
import ExploreMarketplaceComponent from "../DesktopComponents/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";
import FooterComponent from "../DesktopComponents/FooterComponent/FooterComponent.tsx";

const PageMain = () => {
  return (
    <>
      <NavigationComponent />
      <TopBannerComponent />
      <TopCollectionComponent />
      <ExploreMarketplaceComponent />
      <FooterComponent />
    </>
  );
};
export default PageMain;
