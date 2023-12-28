export default function BuildingCladding() {
  return (
    <section className="flex flex-col gap-10 border-b-2 pb-20">
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center h-8 w-8 text-white rounded-md justify-center">
          2
        </span>{" "}
        Building Cladding - All types of cladding material
      </h3>
      <div className="flex flex-col gap-32">
        {/* <!---------- */}
        <div className="flex flex-col gap-10">
          <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
            <div>
              <img loading="lazy" className="bc-1-img" alt="" src="assets/images/bc1.jpg" />
              <caption>Natural Stone Work</caption>
            </div>
            <div>
              <img loading="lazy" className="bc-2-img" alt="" src="assets/images/bc2.jpg" />
              <caption>Artificial Stone</caption>
            </div>
            <div>
              <img loading="lazy" className="bc-3-img" alt="" src="assets/images/bc3.jpg" />
              <caption>Alcobond Aluminum</caption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
