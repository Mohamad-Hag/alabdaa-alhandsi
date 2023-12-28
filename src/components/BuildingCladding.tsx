import { useCallback, useState } from "react";
import Image from "./Image";
import ReactSimpleImageViewer from "react-simple-image-viewer";

export default function BuildingCladding() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "assets/images/bc1.jpg",
    "assets/images/bc2.jpg",
    "assets/images/bc3.jpg",
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
    <section className="flex flex-col gap-10 border-b-2 pb-20">
      <h3 className="font-bold text-xl flex items-center gap-3">
        <span className="bg-yellow-600 flex items-center min-h-8 min-w-8 text-white rounded-md justify-center">
          2
        </span>{" "}
        Building Cladding - All types of cladding material
      </h3>
      <div className="flex flex-col gap-32">
        {/* <!---------- */}
        <div className="flex flex-col gap-10">
          <div className="spm-images flex items-center px-4 py-2 gap-4 overflow-auto">
            <Image
              src={images[0]}
              onClick={() => openImageViewer(0)}
              caption="Natural Stone Work"
              className="bc-1-img"
            />
            <Image
              src={images[1]}
              onClick={() => openImageViewer(1)}
              caption="Artificial Stone"
              className="bc-2-img"
            />
            <Image
              src={images[2]}
              onClick={() => openImageViewer(2)}
              caption="Alcobond Aluminum"
              className="bc-3-img"
            />
          </div>
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
    </section>
  );
}
