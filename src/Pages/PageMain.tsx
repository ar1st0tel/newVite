import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import TopBannerComponent from "@/Components/TopBannerComponent/TopBannerComponent.tsx";
import TopCollectionComponent from "@/Components/TopCollectionComponent/TopCollectionComponent.tsx";
import ExploreMarketplaceComponent from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";
import ExploreAll from "@/HelpersComponents/ExploreAll/ExploreAll.tsx";

const PageMain = () => {
  return (
    <>
      <NavigationComponent />
      <TopBannerComponent />
      <TopCollectionComponent />
      <ExploreAll />
      <ExploreMarketplaceComponent />
      <ExploreAll />
      <FooterComponent />
    </>
  );
};
export default PageMain;
