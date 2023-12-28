import { Link } from "@chakra-ui/react";

interface LogoProps {
  size?: "small" | "medium";
}

export default function Logo({ size = "medium" }: LogoProps) {
  const dimension = size === "medium" ? 90 : 75;

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
