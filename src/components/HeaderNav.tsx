import { Button, Link } from "@chakra-ui/react";
import navItems from "../data/navItems";

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex items-center">
        {navItems.map((navItem) => (
          <li key={navItem.link}>
            <Button as={Link} href={navItem.link} variant="ghost">
              {navItem.text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
