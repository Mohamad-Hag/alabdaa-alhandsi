import social from "../data/social";
import useIsMobile from "../hooks/useIsMobile";
import FloatingLink from "./FloatingLink";

export default function Floating() {
  const isMobile = useIsMobile();
  const gap = isMobile ? "gap-6" : "gap-10";

  return (
    <div
      id="floating"
      className={`floating bg-white drop-shadow-xl rounded-full px-5 h-16 flex items-center ${gap} border-2 border-gray-400 z-20 justify-center`}
    >
      <FloatingLink
        type="facebook"
        link="https://www.facebook.com/profile.php?id=61553803607327"
      />
      <FloatingLink type="instagram" link={social.instagram.link} />
      <FloatingLink type="whatsapp" link={social.whatsapp.link} />
      <FloatingLink type="phone" link={social.phone.link} />
      <FloatingLink type="email" link={social.email.link} />
    </div>
  );
}
