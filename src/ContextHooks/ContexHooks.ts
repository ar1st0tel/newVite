import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ModalContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
  showModal: false,
  setShowModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
