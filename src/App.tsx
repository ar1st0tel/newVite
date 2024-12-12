import { useEffect } from "react";
import "./App.module.scss";
import WebFont from "webfontloader";
import MobileVersion from "./DevicesVersions/MobileVersion/MobileVersion";
import { useMediaQuery } from "react-responsive";
import DesktopVersion from "./DevicesVersions/DesktopVersion/DesktopVersion";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Public Sans", "Inter"],
      },
    });
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
}

export default App;
