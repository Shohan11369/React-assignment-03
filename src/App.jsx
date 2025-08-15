import "./App.css";
import BusinessSection from "./components/BusinessSection";
import HotelSection from "./components/HotelSection";
import LatestTrends from "./components/LatestTrends";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HotelSection />
      <LatestTrends />
      <BusinessSection />
    </>
  );
}

export default App;
