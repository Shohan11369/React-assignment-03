import React from "react";
import { Card, CardContent, Rating, Button } from "@mui/material";

function ActivityCard({ name, location, date, rating, description, images }) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-[#F8F8F8]"></Card>
  );
}

export default ActivityCard;
