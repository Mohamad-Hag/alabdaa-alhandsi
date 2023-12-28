import useIsMobile from "../hooks/useIsMobile";
import Header from "./Header";
import IntroIllust from "./IntroIllust";
import IntroLeft from "./IntroLeft";

export default function Intro() {
  const isMobile = useIsMobile();
  const gap = isMobile ? "gap-5" : "gap-24";

  return (
    <section className="intro min-h-screen w-full border-b-2">
      <Header />
      <div
        className={`flex items-center justify-center ${gap} py-10 flex-wrap-reverse`}
      >
        <IntroLeft />
        <IntroIllust />
      </div>
    </section>
  );
}
