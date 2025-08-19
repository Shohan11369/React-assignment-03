import "./App.css";
import NavBar from "./components/ReUseable/NavBar";
import Footer from "./components/ReUseable/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
