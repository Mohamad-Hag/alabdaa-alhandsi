import useIsMobile from "../hooks/useIsMobile";

export default function IntroIllust() {
  const isMobile = useIsMobile();

  const scale = isMobile ? "scale-90" : "scale-110";

  return (
    <div className={`${scale}`}>
      <div className="flex items-end gap-5">
        <div className="i-img-1 h-32 w-32 border-4 rounded-lg border-yellow-600 shadow-lg"></div>
        <div className="i-img-2 h-24 w-24 border-4 rounded-lg border-yellow-600 shadow-lg"></div>
      </div>
      <div className="mt-5">
        <div className="i-img-3 h-32 w-32 border-4 rounded-lg border-yellow-600 ml-10 shadow-lg"></div>
      </div>
    </div>
  );
}
