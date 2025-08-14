import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

export default function TrendCard({ image, title, subtitle, rating, price }) {
  return (
    <Card className="overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Box className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, idx) =>
            idx < Math.floor(rating) ? (
              <Star key={idx} className="text-orange-500" />
            ) : (
              <StarBorder key={idx} className="text-orange-500" />
            )
          )}
          <Typography variant="body2" className="ml-2">
            {rating}
          </Typography>
        </Box>
        {price && (
          <Typography variant="body2" className="mt-1 font-semibold">
            ${price}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
