import { useEffect, useState } from "react";

export const useSelectNavLine = (defaultSelection: string = "") => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultSelection);
  useEffect(() => {
    const storedSelectedItem = localStorage.getItem("selectedItem");
    if (storedSelectedItem) {
      setSelectedItem(storedSelectedItem);
    }
  }, []);
  const changeColor = (item: string) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", item);
  };
  return { selectedItem, changeColor };
};
