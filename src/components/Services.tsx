import { FaServicestack } from "react-icons/fa";
import SwimmingPools from "./SwimmingPools";
import BuildingCladding from "./BuildingCladding";
import Landscape from "./Landscape";
import CarbetaryMarble from "./CarbetaryMarble";

export default function Services() {
  return (
    <section id="services" className="flex flex-col gap-16 py-10">
      <h2 className="font-bold text-2xl flex gap-1 items-center">
        <FaServicestack /> Our Services
      </h2>
      <div className="flex flex-col gap-14">
        <SwimmingPools />
        <BuildingCladding />
        <Landscape />
        <CarbetaryMarble />
      </div>
    </section>
  );
}
