import classes from "./AppRoutes.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMain from "@/Pages/PageMain.tsx";
import PageDiscover from "@/Pages/DiscoverPage/PageDiscover.tsx";
import PageCreators from "@/Pages/CreatorsPage/PageCreators.tsx";
import PageSells from "@/Pages/SellsPage/PageSells.tsx";
import PageStats from "@/Pages/StatsPage/PageStats.tsx";
import PAGE_TEST_ANOTHER_PROJECT from "@/Pages/TEST_PAGE_FOR_FUTURE_COMPONENTS/PAGE_TEST_ANOTHER_PROJECT.tsx";
import PageCardExtended from "@/Pages/CardExtendedPage/PageCardExtended.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className={classes.background}>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/discover" element={<PageDiscover />} />
          <Route path="/creators" element={<PageCreators />} />
          <Route path="/sells" element={<PageSells />} />
          <Route path="/stats" element={<PageStats />} />
          <Route path="/test" element={<PAGE_TEST_ANOTHER_PROJECT />} />
          <Route path="/card" element={<PageCardExtended />} />
          <Route path="/card/:id" element={<PageCardExtended />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default AppRoutes;