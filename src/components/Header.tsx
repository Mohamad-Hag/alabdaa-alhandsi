import HeaderNavMobile from "./HeaderNavMobile";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-10 justify-between">
      <Logo />
      <HeaderNavMobile />
    </header>
  );
}
