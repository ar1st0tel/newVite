import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./MobileVersion.module.scss";
import MobileMainPage from "../../MobilePages/MobileMainPage.tsx";
import MobileDiscoverPage from "../../MobilePages/MobileDiscoverPage.tsx";

const MobileVersion = () => {
  return (
    <BrowserRouter>
      <div className={classes.background}>
        <Routes>
          <Route path="/" element={<MobileMainPage />} />
          <Route path="/discover" element={<MobileDiscoverPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default MobileVersion;
