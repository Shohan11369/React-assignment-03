import React from "react";
import TrendCard from "./ReUseable/TrendCard";

const trendsData = [
  {
    title: "Beach Paradise",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    price: 299,
    image: "/trend1.png",
  },
  {
    title: "Mountain Escape",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.8,
    price: 249,
    image: "/trend2.png",
  },
  {
    title: "City Lights",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.2,
    price: 199,
    image: "/trend3.png",
  },
  {
    title: "Desert Retreat",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.0,
    price: 189,
    image: "/trend4.png",
  },
  {
    title: "Forest Lodge",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.6,
    price: 210,
    image: "/trend5.png",
  },
  {
    title: "Lake House",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.7,
    price: 259,
    image: "/trend3.png",
  },
  {
    title: "Island Resort",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    price: 399,
    image: "/trend6.png",
  },
  {
    title: "Historic Inn",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.3,
    price: 179,
    image: "/trend6.png",
  },
  {
    title: "Snow Chalet",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.9,
    price: 289,
    image: "/trend3.png",
  },
  {
    title: "Riverside Cabin",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.4,
    price: 220,
    image: "/trend2.png",
  },
  {
    title: "Safari Lodge",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.1,
    price: 270,
    image: "/trend4.png",
  },
  {
    title: "Countryside Villa",
    subtitle:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    price: 200,
    image: "/trend4.png",
  },
];

export default function LatestTrends() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">The Latest Trends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendsData.map((item, i) => (
            <TrendCard
              key={i}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
