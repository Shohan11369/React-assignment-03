import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function ArrowButton({ direction = "right", onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        [direction === "right" ? "right" : "left"]: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      {direction === "left" ? <ArrowBackIos /> : <ArrowForwardIos />}
    </IconButton>
  );
}

export default ArrowButton;
