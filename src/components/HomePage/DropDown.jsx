import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
function ProfileDropDown() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  const suggestions = [
    "Best Restaurants in Singapore",
    "Luxury Hotels",
    "Things to do today",
    "Cheap Flights",
    "Car Rentals near me",
    "Shopping Malls",
    "Upcoming Events",
  ];

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Click outside -> hide dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="w-full flex justify-center mt-4 px-2 sm:px-4">
      <div
        ref={suggestionRef}
        className="relative flex flex-wrap sm:flex-nowrap items-center border border-gray-300 rounded-full w-full max-w-xl bg-white"
      >
        {/* Search Input */}
        <input
          type="text"
          placeholder="restaurant, hotel, service..."
          className="px-3 sm:px-4 py-2 text-sm outline-none flex-1 w-full sm:w-auto"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(e.target.value.trim().length > 0);
          }}
        />

        {/* Location Input */}
        <div className="flex items-center border-t sm:border-t-0 sm:border-l border-gray-300 px-3 w-full sm:w-auto">
          <MapPin size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Singapore"
            className="px-2 py-2 text-sm outline-none w-full sm:w-24"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-primary text-white p-2 flex items-center justify-center"
        >
          <Search size={16} />
        </button>

        {/* Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-[9999] max-h-60 overflow-y-auto">
            {filteredSuggestions.map((s, idx) => (
              <div
                key={idx}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchTerm(s);
                  setShowSuggestions(false);
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDropDown;
