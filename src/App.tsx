import { useEffect, useState } from "react";
import "./App.module.scss";
import WebFont from "webfontloader";
import AppRoutes from "@/AppRoutes/AppRoutes.tsx";
import { ModalContext } from "@/ContextHooks/ContexHooks.ts";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Public Sans", "Inter"],
      },
    });
  }, []);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <AppRoutes />;
    </ModalContext.Provider>
  );
}

export default App;
