import React, { useCallback, useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import Image from "./Image";

export default function CarbetaryMarble() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "assets/images/cAndm1.jpg",
    "assets/images/cAndm2.jpg",
    "assets/images/cAndm3.jpg", 
    "assets/images/cAndm4.jpg",
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
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center min-h-8 min-w-8 text-white rounded-md justify-center">
          4
        </span>{" "}
        Carbetary and Marble
      </h3>
      <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
        <Image
          src={images[0]}
          onClick={() => openImageViewer(0)}
          caption="Counters"
          className="cAndm-1-img"
        />
        <Image
          src={images[1]}
          onClick={() => openImageViewer(1)}
          caption="Wood Flooring"
          className="cAndm-2-img"
        />
        <Image
          src={images[2]}
          onClick={() => openImageViewer(2)}
          caption="Marble Flooring"
          className="cAndm-3-img"
        />
        <Image
          src={images[3]}
          onClick={() => openImageViewer(3)}
          caption="Outdoor Kitchen & Barbecue"
          className="cAndm-3-img"
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
