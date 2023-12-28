import SwimmingPoolConstruction from "./SwimmingPoolConstruction";
import SwimmingPoolMaintenance from "./SwimmingPoolMaintenance";

export default function SwimmingPools() {
  return (
    <section className="flex flex-col gap-10 border-b-2 pb-20">
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center h-8 w-8 text-white rounded-md justify-center">
          1
        </span>{" "}
        Swimming Pools
      </h3>
      <div className="flex flex-col gap-32">
        <SwimmingPoolMaintenance />
        <SwimmingPoolConstruction />
      </div>
    </section>
  );
}
