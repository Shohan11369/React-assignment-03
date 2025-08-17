import React from "react";
import { IconButton } from "@mui/material";
import ActivityCard from "./ReUseable/ActivityCard";
import ArrowButton from "./ReUseable/ArrowButton";

function RecentActivities() {
  const activities = [
    {
      name: "Leslie sakho",
      location: "Canada, toronto",
      date: "09/5/2025",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["/last1.png", "/last2.png", "/last3.png"],
    },
    {
      name: "Chris macari",
      location: "Singapour",
      date: "14/08/2025",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["/last4.png", "/last5.png", "/last6.png"],
    },
    {
      name: "Jojo alba",
      location: "Kuala lumpur",
      date: "28/05/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["/last7.png", "/last8.png", "/last9.png"],
    },
  ];

  const handleNext = () => {
    console.log("Right arrow clicked!");
  };

  return <section className="w-full py-10 px-6 "></section>;
}

export default RecentActivities;
