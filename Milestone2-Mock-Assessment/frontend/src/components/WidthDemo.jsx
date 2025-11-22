import React from "react";
import withWindowWidth from "./withWindowWidth";

function WidthDemo({ windowWidth }) {
  const boxStyle = {
    background: "#e1ffe8",
    border: "2px solid #00b33c",
    padding: "18px",
    borderRadius: "10px",
    marginTop: "20px",
    maxWidth: "350px",
    fontSize: "18px",
    fontWeight: "600"
  };

  return <div style={boxStyle}>Window Width: {windowWidth}px</div>;
}

export default withWindowWidth(WidthDemo);
