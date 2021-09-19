import React from "react";
import "./Mapa.css";

const WaveContainer = () => {
  return (
    <div className="container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "#f1eede" }}
        ></path>
      </svg>
    </div>
  );
};
export default WaveContainer;
