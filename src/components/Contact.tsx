import { Link } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import social from "../data/social";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-3">
      <label className="font-bold">Contact Us</label>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-1 items-center">
          <FaEnvelope />{" "}
          <Link target="_blank" href={social.email.link}>
            {social.email.linkText}
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <FaPhoneAlt />{" "}
          <Link target="_blank" href={social.phone.link}>
            {social.phone.linkText}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link target="_blank" href={social.facebook.link}>
            <FaFacebook size={20} className="fill-gray-400" />
          </Link>
          <Link target="_blank" href={social.instagram.link}>
            <FaInstagram size={20} className="fill-gray-400" />
          </Link>
          <Link target="_blank" href={social.whatsapp.link}>
            <FaWhatsapp size={20} className="fill-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
