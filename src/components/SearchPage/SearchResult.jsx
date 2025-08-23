import React, { useState } from "react";
import { Button } from "@mui/material";

const restaurants = [
  {
    name: "The snug",
    image: "/trend1.png",
    rating: 4.5,
    reviews: 654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Bottega",
    image: "/trend2.png",
    rating: 5.0,
    reviews: 1654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Little Shucker",
    image: "/trend3.png",
    rating: 3.0,
    reviews: 553,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Lokma",
    image: "/trend4.png",
    rating: 4.5,
    reviews: 654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Starbelly",
    image: "/trend5.png",
    rating: 4.5,
    reviews: 654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "The melt",
    image: "/trend6.png",
    rating: 4.5,
    reviews: 654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Arabia Nights",
    image: "/trend4.png",
    rating: 4.5,
    reviews: 654,
    desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
];

// Top 3 restaurants (just pick first 3 for now)
const topRestaurants = restaurants.slice(0, 3);

function SearchResult() {
  const [showBox, setShowBox] = useState(false);

  return (
    <section>
      <div>
        <h3 className="mt-4 mb-3 ml-20">Home/All resturant</h3>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-6 gap-6 px-4">
        {/* Left List */}
        <div className="flex-1 space-y-6">
          {/* Title + Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h2 className="text-xl sm:text-2xl font-bold capitalize">
              Best restaurants in Singapore
            </h2>
            <div className="relative">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowBox(!showBox)}
              >
                Sort
              </Button>

              {/* Dropdown Box */}
              {showBox && (
                <div className="absolute top-full right-0 w-56 sm:w-64 bg-white border border-gray-300 rounded-md shadow-lg z-[9999] mt-2">
                  <h3 className="font-semibold p-3 border-b">
                    🍽️ All Restaurant Top 3
                  </h3>
                  {topRestaurants.map((r, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {r.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {restaurants.map((r, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 border-b pb-4 items-start hover:bg-gray-50"
            >
              {/* Image */}
              <img
                src={r.image}
                alt={r.name}
                className="w-full sm:w-32 h-40 sm:h-24 rounded-lg object-cover"
              />

              {/* Info */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg">{r.name}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
                <div className="flex items-center mt-2">
                  {/* Rating Stars */}
                  <span className="text-yellow-500 text-sm">⭐ {r.rating}</span>
                  <span className="ml-2 text-gray-500 text-sm">
                    ({r.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Show More Button */}
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                backgroundColor: "#0073e6",
                paddingX: "24px",
                "&:hover": { backgroundColor: "#005bb5" },
              }}
            >
              Show more
            </Button>
          </div>
        </div>

        {/* Right Map */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[500px] lg:h-[750px] sticky top-20">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.2256014903!2d103.67943912755655!3d1.3139946157512572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2smy!4v1755620455948!5m2!1sen!2smy"
            className="w-full h-full rounded-lg border"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
