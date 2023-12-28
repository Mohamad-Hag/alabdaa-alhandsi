import { useCallback, useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import Image from "./Image";

export default function SwimmingPoolMaintenance() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "assets/images/spm1.jpg",
    "assets/images/spm2.jpg",
    "assets/images/spm3.jpg",
    "assets/images/spm4.jpg",
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-lg font-bold border-l-4 pl-3 border-gray-400">
        Swimming Pool Maintenance
      </h4>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto   ">
        <Image
          src={images[0]}
          onClick={() => openImageViewer(0)}
          caption="Swimming Pool Cleaning"
          className="spm-1-img"
        />
        <Image
          src={images[1]}
          onClick={() => openImageViewer(1)}
          caption="Pool Renovation"
          className="spm-2-img"
        />
        <Image
          src={images[2]}
          onClick={() => openImageViewer(2)}
          caption="Pump Room Maintenance"
          className="spm-3-img"
        />
        <Image
          src={images[3]}
          onClick={() => openImageViewer(3)}
          caption="Leak Detection and Treatment"
          className="spm-4-img"
        />
      </div>
      {isViewerOpen && (
        <ReactSimpleImageViewer
          src={images}
          onClose={closeImageViewer}
          currentIndex={currentImage}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
