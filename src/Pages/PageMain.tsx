import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import TopBannerComponent from "@/Components/TopBannerComponent/TopBannerComponent.tsx";
import TopCollectionComponent from "@/Components/TopCollectionComponent/TopCollectionComponent.tsx";
import ExploreMarketplaceComponent from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";

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
