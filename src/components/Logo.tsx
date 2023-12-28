import { Link } from "@chakra-ui/react";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "medium" }: LogoProps) {
  const dimension = size === "medium" ? 90 : size === "small" ? 75 : 200;

  return (
    <Link href="#">
      <img
        height={dimension}
        width={dimension}
        alt="logo"
        src="assets/logo.png"
      />
    </Link>
  );
}
