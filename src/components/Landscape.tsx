export default function Landscape() {
  return (
    <section className="flex flex-col gap-10 border-b-2 pb-20">
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center min-h-8 min-w-8 text-white rounded-md justify-center">
          3
        </span>{" "}
        Landscape
      </h3>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
        <div>
          <img loading="lazy" className="spm-1-img" alt="" src="assets/images/land1.jpg" />
          <caption>Water Fountain</caption>
        </div>
        <div>
          <img loading="lazy" className="spm-2-img" alt="" src="assets/images/land2.jpg" />
          <caption>Waterfall</caption>
        </div>
        <div>
          <img loading="lazy" className="spm-3-img" alt="" src="assets/images/land3.jpg" />
          <caption>Pargula</caption>
        </div>
        <div>
          <img loading="lazy" className="spm-4-img" alt="" src="assets/images/land4.jpg" />
          <caption>Artificial Grass</caption>
        </div>
      </div>
    </section>
  );
}
