import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Rating,
} from "@mui/material";

function HotelCard({ title, subtitle, rating, price, image }) {
  return (
    <Card
      className="w-full shadow-lg rounded-lg overflow-hidden"
      sx={{ borderRadius: "12px" }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className="object-cover"
      />
      <CardContent>
        <Typography variant="h6" className="font-bold text-gray-800 mb-1">
          {title || "No Title"}
        </Typography>

        <Typography variant="body2" className="text-gray-500 mb-2">
          {subtitle || "No description available"}
        </Typography>

        <div className="flex items-center mb-2">
          <Rating
            name={`rating-${title}`}
            value={rating || 0}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="ml-2 text-sm text-gray-500">({rating || "0"})</span>
        </div>

        <Typography
          variant="body1"
          className="text-[#1677BD] font-semibold mb-3"
        >
          {typeof price === "number"
            ? `$${price.toFixed(2)}`
            : "Price Not Available"}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1677BD",
            "&:hover": { backgroundColor: "#125f96" },
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
          }}
          fullWidth
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
