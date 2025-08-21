import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [showGallery, setShowGallery] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <div className=" ">
      <div>
        <h2 className="ml-6 mt-4">Home/BellaItalia</h2>
      </div>
      {/* ===== Cover + Title ===== */}
      <div className="relative w-full h-[552px] object-cover mt-6">
        <img
          src="/LogoD.png"
          alt="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="absolute top-20 left-20  mx-auto p-6 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold text-[#FFFFFF]">
            {id || "Bella Italia"}
          </h1>
          <p className="text-[#FFFFFF] mt-2">
            Italian · $$ · ⭐⭐⭐⭐ 4.7 (320 reviews)
          </p>
          <p className="text-[#FFFFFF] mt-2">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout. The lorem ipsum is, in printing,
            a series of meaningless words used temporarily to calibrate a
            layout.
          </p>
          <p className="text-sm text-[#FFFFFF] mt-3">
            📍 123 Orchard Road, Singapore
          </p>
        </div>

        {/* <div>
          <img className="mb-10" src="BellaLogo.png" alt="" />
        </div> */}
      </div>
      {/* ===== Photos Section ===== */}
      <div className="container ml-20 mt-16">
        <h2 className="text-xl font-bold mb-3">
          Discover our magnificent place in photos
        </h2>

        <div className="flex gap-2 h-96">
          {/* Left side big image */}
          <img
            src="/Photo1.png"
            alt="gallery"
            className="w-1/2 h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setZoomImg("/Photo1.png")}
          />

          {/* Right side 4 small images 2x2 grid */}
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {["/Photo2.png", "/Photo3.png", "/Photo3.png", "/Photo2.png"].map(
              (img) => (
                <img
                  key={img}
                  src={img}
                  alt="gallery"
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => setZoomImg(img)}
                />
              )
            )}
          </div>
        </div>

        {/* View all button */}
        <button
          onClick={() => setShowGallery(true)}
          className="mt-2 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 font-medium w-40 h-10"
        >
          + View all 7 pics
        </button>
      </div>
    </div>
  );
}
