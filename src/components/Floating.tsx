import social from "../data/social";
import FloatingLink from "./FloatingLink";

export default function Floating() {
  return (
    <div
      id="floating"
      className="floating bg-white drop-shadow-xl rounded-full px-5 h-16 flex items-center gap-10 border-2 border-gray-400 z-20 justify-center"
    >
      <FloatingLink
        type="facebook"
        link="https://www.facebook.com/profile.php?id=61553803607327"
      />
      <FloatingLink type="instagram" link={social.instagram.link} />
      <FloatingLink type="whatsapp" link={social.whatsapp.link} />
      <FloatingLink type="email" link="#" />
    </div>
  );
}
