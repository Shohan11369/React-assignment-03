// BusinessSection.jsx
import React from "react";
import { Button, Typography } from "@mui/material";

function BusinessSection() {
  return (
    <div className="bg-[#F2F2F2] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg">
      {/* Left Content */}
      <div className="flex-1 flex justify-end">
        <div className="text-left max-w-md">
          <Typography
            variant="h5"
            fontWeight="bold"
            className="mb-4 !text-gray-900 font-semibold"
          >
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </Typography>

          <Typography variant="body2" className="!text-gray-500 mb-8 !mt-2">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              borderRadius: "999px",
              paddingX: "20px",
              paddingY: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
              marginTop: "30px",
            }}
          >
            Explore MyFeedback business
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-start">
        <img
          src="Business.png"
          alt="Business"
          className="w-[80%] object-cover rounded-3xl shadow-md"
        />
      </div>
    </div>
  );
}

export default BusinessSection;
