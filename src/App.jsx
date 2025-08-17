import "./App.css";

import BusinessSection from "./components/BusinessSection";
import HotelSection from "./components/HotelSection";
import LatestTrends from "./components/LatestTrends";

import NavBar from "./components/ReUseable/NavBar";
import RecentActivities from "./components/RecentActivities";
import Footer from "./components/ReUseable/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HotelSection />
      <LatestTrends />
      <BusinessSection />
      <RecentActivities />
      <Footer />
    </>
  );
}

export default App;
