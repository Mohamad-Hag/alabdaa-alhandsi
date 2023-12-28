import React from "react";

export default function CarbetaryMarble() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center h-8 w-8 text-white rounded-md justify-center">
          4
        </span>{" "}
        Carbetary and Marble
      </h3>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
        <div>
          <img loading="lazy" className="cAndm-1-img" alt="" src="assets/images/cAndm1.jpg" />
          <caption>Counters</caption>
        </div>
        <div>
          <img loading="lazy" className="cAndm-2-img" alt="" src="assets/images/cAndm2.jpg" />
          <caption>Flooring</caption>
        </div>
        <div>
          <img loading="lazy" className="cAndm-1-img" alt="" src="assets/images/cAndm3.jpg" />
          <caption>Outdoor Kitchen</caption>
        </div>
      </div>
    </div>
  );
}
