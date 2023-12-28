import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import navItems from "../data/navItems";

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
      <Drawer placement="bottom" isOpen={isOpen} onClose={close}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <ul className="flex flex-col gap-5 mt-10">
              {navItems.map((navItem) => (
                <li key={navItem.link}>
                  <Button
                    onClick={close}
                    as={Link}
                    variant="ghost"
                    w="100%"
                    href={navItem.link}
                  >
                    {navItem.text}
                  </Button>
                </li>
              ))}
            </ul>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
