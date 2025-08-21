import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HotelCard from "./Hotelcard";
import ArrowButton from "../ReUseable/ArrowButton";
function HotelSection() {
  const hotels = [
    {
      title: "Luxury Hotel",
      subtitle: "5-star luxury with ocean view",
      rating: 4.5,
      price: 199.99,
      image: "/Hotel1.png",
    },
    {
      title: "City View Hotel",
      subtitle: "Modern rooms with city skyline",
      rating: 4,
      price: 149.5,
      image: "/Hotel2.png",
    },
    {
      title: "Beach Resort",
      subtitle: "Enjoy the sunshine & sea breeze",
      rating: 5,
      price: 249,
      image: "/Hotel3.png",
    },
    {
      title: "Budget Stay",
      subtitle: "Affordable & comfortable",
      rating: 3.5,
      price: null,
      image: "/Hotel4.png",
    },
    {
      title: "Mountain Escape",
      subtitle: "Fresh air & peaceful views",
      rating: 4.8,
      price: 179,
      image: "/Hotel5.png",
    },
    {
      title: "Desert Villa",
      subtitle: "Unique desert experience",
      rating: 4.2,
      price: 210,
      image: "/Hotel6.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, hotels.length - itemsPerPage)
    );
  };

  const visibleHotels = hotels.slice(startIndex, startIndex + itemsPerPage);
  const menuItems = [
    { icon: "/img1.png", label: "Restaurants" },
    { icon: "/img2.png", label: "Hotels" },
    { icon: "/img3.png", label: "Things to do" },
    { icon: "/img4.png", label: "Flights" },
    { icon: "/img5.png", label: "Rentals" },
    { icon: "/img6.png", label: "Shopping" },
    { icon: "/img7.png", label: "Events" },
    { icon: "/img1.png", label: "Restaurants" },
    { icon: "/img2.png", label: "Hotels" },
    { icon: "/img3.png", label: "Things to do" },
    { icon: "/img4.png", label: "Flights" },
    { icon: "/img5.png", label: "Rentals" },
  ];

  return (
    <section className="py-10">
      {/* Bottom icons menu */}
      <div className="border-t border-gray-200 overflow-x-auto mt-2">
        <div className="max-w-6xl mx-auto flex items-center space-x-8 py-2 px-4 text-sm text-gray-600 gap-5">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate("/search")}
              className="flex flex-col items-center hover:text-primary"
            >
              <img src={item.icon} alt={item.label} className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative container mx-auto px-10 py-10 bg-[#1677BD] rounded-xl">
        <h2 className="text-2xl text-white font-bold mb-6 text-start">
          Find the best restaurant ratings below
        </h2>

        {/* Left Arrow */}
        <ArrowButton direction="left" onClick={handlePrev} />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleHotels.map((hotel, i) => (
            <HotelCard key={i} {...hotel} />
          ))}
        </div>

        {/* Right Arrow */}
        <ArrowButton direction="right" onClick={handleNext} />
      </div>
    </section>
  );
}

export default HotelSection;
