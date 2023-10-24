import React from "react";
import { Typography } from "@mui/material";
import { Thermostat, WaterDrop } from "@mui/icons-material";
import AirIcon from "@mui/icons-material/Air";

function WeatherFooter({ tempFeel, humidity, wind }) {
  return (
    <div className="footer">
      <div className="temperature-feels">
        {/* Temperature component */}
      </div>
      <div className="temperature">
        {/* Humidity component */}
      </div>
      <div className="temperature">
        {/* Wind component */}
      </div>
    </div>
  );
}

export default WeatherFooter;
