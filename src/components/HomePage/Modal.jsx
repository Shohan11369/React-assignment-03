// Modal.jsx
import React, { useState, useRef, useEffect } from "react";
import { TextField, Paper, List, ListItem } from "@mui/material";

const suggestions = [
  "Best Restaurants in Singapore",
  "Luxury Hotels",
  "Things to do today",
  "Cheap Flights",
  "Car Rentals near me",
  "Shopping Malls",
  "Upcoming Events",
];

function Modal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Click outside dropdown -> close
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

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      <div ref={suggestionRef} className="relative">
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search restaurants, hotels, services..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onClick={() => setShowSuggestions(true)}
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && searchTerm && (
          <Paper
            style={{
              position: "absolute",
              top: "45px",
              left: 0,
              width: "100%",
              zIndex: 50,
              maxHeight: 200,
              overflowY: "auto",
            }}
          >
            <List>
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((s, idx) => (
                  <ListItem
                    button
                    key={idx}
                    onClick={() => {
                      setSearchTerm(s);
                      setShowSuggestions(false);
                    }}
                  >
                    {s}
                  </ListItem>
                ))
              ) : (
                <ListItem>No results found</ListItem>
              )}
            </List>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default Modal;
