import { Link } from "@chakra-ui/react";
import navItems from "../data/navItems";
import useIsMobile from "../hooks/useIsMobile";

export default function FooterLinks() {
  const isMobile = useIsMobile();
  const flex = isMobile ? "flex-col" : "";

  return (
    <ul
      className={`flex gap-10 flex-wrap align-center justify-center text-center ${flex}`}
    >
      {navItems.map((navItem) => (
        <li key={navItem.link}>
          <Link href={navItem.link}>{navItem.text}</Link>
        </li>
      ))}
    </ul>
  );
}
