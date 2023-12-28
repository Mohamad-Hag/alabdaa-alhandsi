import { Button, IconButton, Link } from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import navItems from "../data/navItems";
import HeaderNavMobileDrawer from "./HeaderNavMobileDrawer";

export default function HeaderNavMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={open}
        aria-label="menu"
        icon={<BiMenu />}
      ></IconButton>
      {isOpen && <HeaderNavMobileDrawer onClose={close} />}
    </>
  );
}
