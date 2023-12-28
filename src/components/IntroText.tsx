import useIsMobile from "../hooks/useIsMobile";

export default function IntroText() {
  const isMobile = useIsMobile();
  const textAlign = isMobile ? "text-center" : "text-left";
  const headingFontSize = isMobile ? "text-2xl" : "text-3xl";

  return (
    <div className={`max-w-2xl flex flex-col items-center gap-3 ${textAlign}`}>
      <h1
        className={`${headingFontSize} font-bold w-full`}
        style={{ color: "#794c08" }}
      >
        AL ABDAA AL HANDASI{" "}
        <span className="text-sm">Technical Services CO LLC</span>
      </h1>
      <p>
        We are a group of engineers and technicians who have the considered
        career, and we try to offer high quality services that well get your
        satisfaction, it all comes with competitive prices
      </p>
    </div>
  );
}
