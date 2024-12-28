import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

type ModalContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
  showModal: false,
  setShowModal: () => {},
});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  const { showModal, setShowModal } = context;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (elem: MouseEvent) => {
    const modalElement = document.getElementById("modalWindow");
    if (modalElement && !modalElement.contains(elem.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);
  return { showModal, toggleModal };
};
