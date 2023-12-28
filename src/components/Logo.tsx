import { Link } from "@chakra-ui/react";

export default function Logo() {
  const dimention = 90;

  return (
    <Link href="#">
      <img
        height={dimention}
        width={dimention}
        alt="logo"
        src="assets/logo.png"
      />
    </Link>
  );
}
