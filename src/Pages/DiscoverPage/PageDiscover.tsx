import NavigationComponent from "@/Components/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/Components/FooterComponent/FooterComponent.tsx";
import ExploreMarketplaceComponent from "@/Components/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";
import LoadingElem from "@/HelpersComponents/LoadingElem/LoadingElem.tsx";

const PageDiscover = () => {
  return (
    <>
      <NavigationComponent />
      <ExploreMarketplaceComponent />
      <LoadingElem />
      <FooterComponent />
    </>
  );
};
export default PageDiscover;
