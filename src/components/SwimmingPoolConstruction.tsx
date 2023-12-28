export default function SwimmingPoolConstruction() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-bold border-l-4 pl-3 border-gray-400">
          Swimming Pool Construction
        </h4>
        <div className="ml-4">
          <p className="text-gray-700">
            Design and construction of all types of swimming pools
          </p>
          <p className="text-gray-700">5 years warranty for construction</p>
          <p className="text-gray-700">1 year warranty for pump room</p>
        </div>
      </div>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
        <div>
          <img
            loading="lazy"
            className="spc-1-img"
            alt=""
            src="assets/images/spc1.jpg"
          />
          <caption>Swimming Pool Cleaning</caption>
        </div>
        <div>
          <img
            loading="lazy"
            className="spc-2-img"
            alt=""
            src="assets/images/spc2.jpg"
          />
          <caption>Pool Renovation</caption>
        </div>
      </div>
    </div>
  );
}
