import { Link, Tooltip } from "@chakra-ui/react";
import firstCharToUpper from "../utils/firstCharToUpper";
import {
    FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

interface FloatingLinkProps {
  type: "facebook" | "phone" | "instagram" | "whatsapp" | "email";
  link: string;
}

export default function FloatingLink({ type, link }: FloatingLinkProps) {
  const icon =
    type === "facebook" ? (
      <FaFacebook className="fill-blue-700" size={30} />
    ) : type === "instagram" ? (
      <FaInstagram className="fill-pink-700" size={30} />
    ) : type === "phone" ? (
      <FaPhoneAlt className="fill-yellow-700" size={25} />
    ) : type === "whatsapp" ? (
      <FaWhatsapp className="fill-green-700" size={30} />
    ) : type === "email" ? (
      <FaEnvelope className="fill-red-700" size={30} />
    ) : (
      "blue"
    );
  const label = firstCharToUpper(type);

  return (
    <Tooltip label={label}>
      <Link target="_blank" href={link}>
        {icon}
      </Link>
    </Tooltip>
  );
}
