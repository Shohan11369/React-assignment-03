import "./App.css";

import NavBar from "./components/ReUseable/NavBar";
import Footer from "./components/ReUseable/Footer";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchPage/SearchResult";
import DetailPage from "./components/DetailPage/DetailPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
