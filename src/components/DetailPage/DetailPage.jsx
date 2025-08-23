import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [showGallery, setShowGallery] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <section className="py-10">
      {/* Breadcrumb  */}
      <div className="px-4 md:px-20">
        <h2 className="mt-4 text-sm md:text-base">Home / BellaItalia</h2>
      </div>

      {/*  Hero Section  */}
      <div className="relative mx-auto mt-6">
        <img
          src="LogoD.png"
          alt="cover"
          className="w-full h-[250px] sm:h-[400px] md:h-[550px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content Overlay */}
        <div className="absolute inset-x-4 top-6 sm:inset-x-12 sm:top-16 lg:inset-x-20 lg:top-24 p-4 md:p-6 rounded-lg max-w-full sm:max-w-[70%] md:max-w-md">
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
            {id || "Bella Italia"}
          </h1>
          <p className="text-white mt-2 text-sm md:text-base">
            Italian · $$ · ⭐⭐⭐⭐ 4.7 (320 reviews)
          </p>
          <p className="text-white mt-1 md:mt-3 mb-4 text-xs md:text-base w-[90%] md:w-full leading-relaxed">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>
          <p className="text-sm md:text-base text-white mt-4">
            📍 123 Orchard Road, Singapore
          </p>
        </div>
      </div>

      {/* ===== Photos Section ===== */}
      <div className="container mx-auto px-4 md:px-20 mt-16">
        <h2 className="text-lg md:text-xl font-bold mb-3">
          Discover our magnificent place in photos
        </h2>

        <div className="flex flex-col md:flex-row gap-2 h-[300px] sm:h-[400px] md:h-96">
          <img
            src="/Photo1.png"
            alt="gallery"
            className="w-full md:w-1/2 h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setZoomImg("/Photo1.png")}
          />
          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-full">
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

        <button
          onClick={() => setShowGallery(true)}
          className="mt-6 md:mt-4 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 font-medium w-40 h-10"
        >
          + View all 7 pics
        </button>
      </div>

      {/*  Info + Map */}
      <div className="container mx-auto px-4 md:px-20 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <h2 className="text-2xl md:text-[34px] font-bold mt-4 mb-2">
            More information
          </h2>
          <button
            onClick={() => setShowMenu(true)}
            className="mt-4 bg-green-500 text-white px-3 py-2 rounded mb-2"
          >
            See the Menu
          </button>
          <div className="text-base text-[#232323]">
            <p className="mt-4">📞 +65 6723 1234</p>
            <p className="mt-4">📍 123 Orchard Road</p>
            <p className="mt-4">🕒 Mon-Sun: 11:00am - 10:00pm</p>
            <p className="mt-4">🌐 www.bellaitalia.com</p>
          </div>
        </div>
        <div className="w-full h-[250px] sm:h-[350px] md:h-[432px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510562.46600975504!2d103.22445587865307!3d1.3139221723070147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2smy!4v1755792296820!5m2!1sen!2smy"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/*  Rating Section  */}
      <div className="container mx-auto px-4 md:px-20 mt-14">
        <div className="flex flex-col md:flex-row items-start justify-start gap-4">
          {/* Left */}
          <div className="flex items-start justify-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-yellow-500 fill-current"
              >
                <path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.6L12 15.8 7.1 17.5 8 12 4 8l5.6-1.2L12 2z" />
              </svg>
            </div>
            <div className="">
              <h2 className="text-xl font-bold">Overall rating</h2>
              <p className="text-sm text-gray-500 mt-1">834 Reviews</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-yellow-500 fill-current"
                  >
                    <path d="M10 1.5l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.8 5 16.9l.9-5.6-4-3.9 5.6-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-6 items-center w-full md:w-auto">
            <span className="text-3xl font-bold">4.7</span>
            <div className="flex flex-col gap-2 w-full sm:w-[250px] md:w-[420px]">
              {[
                { label: "5 stars", width: "95%" },
                { label: "4 stars", width: "70%" },
                { label: "3 stars", width: "45%" },
                { label: "2 stars", width: "25%" },
                { label: "1 star", width: "15%" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-16 text-xs text-gray-600">
                    {row.label}
                  </span>
                  <div className="h-2 flex-1 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-blue-600 rounded"
                      style={{ width: row.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Reviews Section ===== */}
      <div className="container mx-auto px-4 md:px-20 mt-8">
        <h2 className="text-xl font-bold mb-3">Customer Reviews</h2>

        {/* 🔍 Filter + ⇅ Sort */}
        <div className="flex justify-between items-center border-b pb-3 mb-5">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-full shadow-sm hover:bg-gray-50">
              <span>🔍</span> Filter
            </button>
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 border px-4 py-2 rounded-full shadow-sm hover:bg-gray-50"
            >
              <span>⇅</span> Sort
            </button>
          </div>
        </div>

        {/* Sort Dropdown */}
        {showSort && (
          <div className="mb-4 border rounded bg-white shadow p-3 w-60">
            <p className="cursor-pointer">⭐ Sort by rating</p>
            <p className="cursor-pointer">💬 Sort by reviews</p>
            <p className="cursor-pointer">🔥 Sort by popularity</p>
          </div>
        )}

        {/*  Reviews List */}
        <div className="space-y-5 w-full">
          {[
            {
              name: "Wei Jie",
              place: "Singapore, Little India",
              date: "29/11/2023",
            },
            {
              name: "Mei Ling",
              place: "Singapore, Orchard boulevard",
              date: "09/05/2023",
            },
            {
              name: "Wei Xiong",
              place: "Singapore, Takashimaya",
              date: "01/05/2023",
            },
            {
              name: "Ming Wei",
              place: "Singapore, Little India",
              date: "31/04/2023",
            },
            {
              name: "Xin Yi",
              place: "Singapore, Zen rooms",
              date: "30/04/2023",
            },
            {
              name: "Zhi Hao",
              place: "Singapore, Boon Keng",
              date: "27/03/2023",
            },
            {
              name: "Li Hua",
              place: "Singapore, DLM loklok",
              date: "24/03/2023",
            },
            {
              name: "Si Ying",
              place: "Singapore, Bedemeer",
              date: "11/03/2023",
            },
            {
              name: "Wei Ting",
              place: "Singapore, Toa Payoh",
              date: "28/02/2023",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="border rounded-2xl p-5 shadow-sm bg-white hover:shadow-md transition"
            >
              {/* Name */}
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.place}</p>

              {/* Stars */}
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-yellow-500 fill-current"
                  >
                    <path d="M10 1.5l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.8 5 16.9l.9-5.6-4-3.9 5.6-.8L10 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-1">{review.date}</p>

              {/* Review text */}
              <p className="text-sm text-gray-600 mt-3">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout. The lorem ipsum is, in
                printing, a series of meaningless words used temporarily to
                calibrate a layout.
              </p>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
            Show more reviews
          </button>
        </div>
      </div>

      {/*  Also Discover */}
      <div className="container mx-auto px-4 md:px-20 mt-12">
        <h2 className="text-xl font-bold mb-4">Also discover...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["The Hotel", "LeResto", "The Vinyo"].map((place, i) => (
            <div
              key={i}
              className="border rounded-lg shadow hover:shadow-lg cursor-pointer"
            >
              <img
                src={`/trend${i + 4}.png`}
                alt={place}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-semibold text-base md:text-lg">{place}</h3>
                <p className="mt-2 text-sm md:text-base text-[#8F8F8F]">
                  The lorem ipsum is placeholder text.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ⭐⭐⭐⭐ 4.{i + 3} · 300+ reviews
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlays (Gallery, Menu, Zoom)  */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full sm:w-[600px]">
            <h2 className="text-xl font-bold mb-4">All Photos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["/trend1.png", "/trend2.png", "/trend3.png", "/trend4.png"].map(
                (img) => (
                  <img
                    key={img}
                    src={img}
                    className="rounded cursor-pointer"
                    onClick={() => setZoomImg(img)}
                  />
                )
              )}
            </div>
            <button
              onClick={() => setShowGallery(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full sm:w-[500px]">
            <h2 className="text-xl font-bold mb-4">Restaurant Menu</h2>
            <img src="/Menu.png" alt="menu" className="w-full rounded" />
            <div className="flex flex-col items-center">
              <h3 className="mt-4 ">Menu Bella Italia</h3>
              <button className="mt-3 px-2 py-1 bg-blue-300 text-black rounded-full hover:bg-slate-400 hover:text-black">
                Download this Menu
              </button>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="flex mt-8 bg-red-500 text-white mx-auto px-4 py-2 rounded"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      {zoomImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="flex flex-col items-center">
            <img
              src={zoomImg}
              alt="zoom"
              className="max-h-[80vh] max-w-full sm:max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setZoomImg(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
