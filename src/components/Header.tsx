import useIsMobile from "../hooks/useIsMobile";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";
import Logo from "./Logo";

export default function Header() {
  const isMobile = useIsMobile();
  const logoSize = isMobile ? "small" : "medium";

  return (
    <header className="flex items-center py-4 px-10 justify-between">
      {/* <Logo size={logoSize} /> */}
      {isMobile ? <HeaderNavMobile /> : <HeaderNav />}
    </header>
  );
}
