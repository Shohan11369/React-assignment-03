import React from "react";
import { Card, CardContent, Rating, Button } from "@mui/material";

function ActivityCard({ name, location, date, rating, description, images }) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-[#F8F8F8]">
      <CardContent>
        <div className="container mt-6  mb-6 ">
          {/* Header */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <div className="bg-white">
              <img src="Icon1.png" alt="" />
            </div>
            <div>
              <h3 className="font-semibold">{name || "Unknown"}</h3>
              <p className="text-gray-500 text-sm">{location || "N/A"}</p>
            </div>
          </div>

          {/* Rating & Date */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
            <Rating value={rating || 0} readOnly size="small" />
            <span className="text-gray-500 text-sm">{date || "No Date"}</span>
          </div>

          {/* Description */}
          <div className="flex justify-center lg:justify-start w-full">
            <p className="text-gray-600 text-sm mb-4 text-center lg:text-left max-w-[60%]">
              {description || "No description available."}
            </p>
          </div>

          {/* Images */}
          <div className="flex justify-center lg:justify-start gap-6 mb-4">
            {(images || []).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="activity"
                className="w-1/4 h-25 object-cover  "
              />
            ))}
          </div>

          {/* Button */}

          <div className="flex justify-center lg:justify-start w-full">
            <Button
              variant="outlined"
              className="rounded-full bg-blue-400 border-black normal-case 
               hover:bg-blue-500 hover:border-blue-600 hover:text-white transition"
            >
              Discover
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
