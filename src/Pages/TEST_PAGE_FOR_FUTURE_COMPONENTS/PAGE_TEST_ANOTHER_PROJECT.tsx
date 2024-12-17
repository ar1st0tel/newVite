import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import TopBannerComponent from "@/Components/TopBannerComponent/TopBannerComponent.tsx";
import TopCollectionComponent from "@/Components/TopCollectionComponent/TopCollectionComponent.tsx";
import ExploreMarketplaceComponent from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";

function PAGE_TEST_ANOTHER_PROJECT() {
  return (
    <>
      <NavigationComponent />
      <TopBannerComponent />
      <TopCollectionComponent />
      <ExploreMarketplaceComponent />
      <FooterComponent />
    </>
  );
}

export default PAGE_TEST_ANOTHER_PROJECT;
