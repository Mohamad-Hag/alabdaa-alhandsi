import useIsMobile from "../hooks/useIsMobile";
import Logo from "./Logo";

export default function IntroIllust() {
  const isMobile = useIsMobile();

  const scale = isMobile ? "scale-90" : "scale-110";

  return (
    <div className={`${scale}`}>
      <Logo size="large" />
    </div>
  );
}
