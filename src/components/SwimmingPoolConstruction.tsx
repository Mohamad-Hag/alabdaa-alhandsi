import { useCallback, useState } from "react";
import Image from "./Image";
import ReactSimpleImageViewer from "react-simple-image-viewer";

export default function SwimmingPoolConstruction() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = ["assets/images/spc1.jpg", "assets/images/spc2.jpg"];

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
        <Image
          src={images[0]}
          onClick={() => openImageViewer(0)}
          caption="Concrete Pools"
          className="spc-1-img"
        />
        <Image
          src={images[1]}
          onClick={() => openImageViewer(1)}
          caption="Fiberglass Pools"
          className="spc-2-img"
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
