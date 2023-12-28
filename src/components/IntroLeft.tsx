import { Button, Link } from "@chakra-ui/react";
import IntroText from "./IntroText";
import useIsMobile from "../hooks/useIsMobile";

export default function IntroLeft() {
  const isMobile = useIsMobile();
  const paddingX = isMobile ? "px-5" : "";

  return (
    <div className={`flex flex-col gap-10 ${paddingX}`}>
      <IntroText />
      <Button
        as={Link}
        href="#contact"
        variant="solid"
        size="lg"
        alignSelf={isMobile ? undefined : "flex-start"}
      >
        Contact Us
      </Button>
    </div>
  );
}
