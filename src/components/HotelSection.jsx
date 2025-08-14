import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HotelCard from "./HotelCard";
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

  return (
    <section className="py-10">
      <div className="relative container mx-auto px-10 py-10 bg-[#1677BD] rounded-xl">
        <h2 className="text-2xl text-white font-bold mb-6 text-start">
          Find the best restaurant ratings below
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleHotels.map((hotel, i) => (
            <HotelCard key={i} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotelSection;
