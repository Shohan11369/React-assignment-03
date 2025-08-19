import React from "react";
import HotelSection from "./HotelSection";
import LatestTrends from "./LatestTrends";
import BusinessSection from "./BusinessSection";
import RecentActivities from "./RecentActivities";

function HomePage() {
  return (
    <div>
      <HotelSection />
      <LatestTrends />
      <BusinessSection />
      <RecentActivities />
    </div>
  );
}

export default HomePage;
