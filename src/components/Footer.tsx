import { Link } from "@chakra-ui/react";
import Contact from "./Contact";
import FooterLinks from "./FooterLinks";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function Footer() {
  const { ref, inView } = useInView();
  const isMobile = useIsMobile();

  useEffect(() => {
    let floating: any = document.querySelector("#floating");
    if (!floating) return;

    if (inView) floating.style.display = "none";
    else floating.style.display = "flex";
  }, [inView]);

  const flex = isMobile ? "flex-col-reverse" : "";
  const paddingX = isMobile ? "px-10" : "px-20";

  // 

  return (
    <footer
      ref={ref}
      id="contact"
      className={`bg-gray-900 text-white ${paddingX} py-20 flex flex-col gap-2 justify-between rounded-t-3xl`}
    >
      <div
        className={`flex items-center justify-between border-b-2 border-gray-700 pb-10 mb-10 ${flex} gap-10`}
      >
        <FooterLinks />
        <Contact />
      </div>
      <p className="text-center">
        All Rights Reserved for{" "}
        <span className="font-bold">AL ABDAA ALHANDASI</span> ©
      </p>
      <p className="text-center text-xs" style={{ color: "gray" }}>
        Made with 🤎 by{" "}
        <Link
          href="https://www.linkedin.com/in/mhd-al-haj-houssein-991304121"
          target="_blank"
        >
          Mhd Al-Haj Houssein
        </Link>
      </p>
    </footer>
  );
}
