import { isMobileScreen } from "../utils/screen-sizes";
import useScreenSize from "./useScreenSize";

const useIsMobile = () => {
  const { width } = useScreenSize();
  const isMobileDeviceScreen = isMobileScreen(width);

  return isMobileDeviceScreen;
};

export default useIsMobile;
