import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import LoadingImg from "@/Pages/DiscoverPage/ContentAndLoading/ContentAndLoading.tsx";
import ExploreMarketplaceComponent from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";

const PageDiscover = () => {
  return (
    <>
      <NavigationComponent />
      <ExploreMarketplaceComponent />
      <LoadingImg />
      <FooterComponent />
    </>
  );
};
export default PageDiscover;
