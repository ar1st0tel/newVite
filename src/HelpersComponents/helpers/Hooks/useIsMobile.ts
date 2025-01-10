import { useMediaQuery } from "react-responsive";

export const useIsMobile = (maxWidth = 425) => {
  return useMediaQuery({ maxWidth: maxWidth });
};
