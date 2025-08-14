import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

export default function TrendCard({ image, title, subtitle, rating, price }) {
  return (
    <Card className="overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent></CardContent>
    </Card>
  );
}
