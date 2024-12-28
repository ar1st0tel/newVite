import { useState } from "react";
import "./App.module.scss";
import AppRoutes from "@/AppRoutes/AppRoutes.tsx";
import { ModalContext } from "@/ContextHooks/ContexHooks.ts";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <AppRoutes />
    </ModalContext.Provider>
  );
}

export default App;
