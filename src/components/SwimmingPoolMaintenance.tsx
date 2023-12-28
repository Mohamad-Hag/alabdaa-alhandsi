export default function SwimmingPoolMaintenance() {
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-lg font-bold border-l-4 pl-3 border-gray-400">
        Swimming Pool Maintenance
      </h4>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto   ">
        <div>
          <img
            loading="lazy"
            className="spm-1-img"
            alt=""
            src="assets/images/spm1.jpg"
          />
          <caption>Swimming Pool Cleaning</caption>
        </div>
        <div>
          <img
            loading="lazy"
            className="spm-2-img"
            alt=""
            src="assets/images/spm2.jpg"
          />
          <caption>Pool Renovation</caption>
        </div>
        <div>
          <img
            loading="lazy"
            className="spm-3-img"
            alt=""
            src="assets/images/spm3.jpg"
          />
          <caption>Pump Room Maintenance</caption>
        </div>
        <div>
          <img
            loading="lazy"
            className="spm-4-img"
            alt=""
            src="assets/images/spm4.jpg"
          />
          <caption>Leak Detection and Treatment</caption>
        </div>
      </div>
    </div>
  );
}
