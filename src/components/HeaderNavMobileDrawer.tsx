import { Box, Button, IconButton, Link } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import navItems from "../data/navItems";

interface HeaderNavMobileDrawerProps {
  onClose: () => void;
}

export default function HeaderNavMobileDrawer({
  onClose,
}: HeaderNavMobileDrawerProps) {
  return (
    <>
      <Box
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-80 h-dvh w-dvw"
      ></Box>
      <Box
        className="fixed bg-gray-900 text-white bottom-0 left-0 right-0 rounded-t-md py-10 px-5"
        zIndex={60}
      >
        <div className="flex items-center justify-between border-b-2 border-gray-800 pb-5">
          <label className="text-lg font-bold text-white">Menu</label>
          <IconButton
            onClick={onClose}
            icon={<BiX />}
            aria-label="close menu"
          />
        </div>
        <ul className="flex flex-col gap-5 mt-10">
          {navItems.map((navItem) => (
            <li key={navItem.link}>
              <Button
                onClick={onClose}
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
      </Box>
    </>
  );
}
