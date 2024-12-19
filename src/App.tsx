import { useEffect } from "react";
import "./App.module.scss";
import WebFont from "webfontloader";
import AppRoutes from "@/AppRoutes/AppRoutes.tsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Public Sans", "Inter"],
      },
    });
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
