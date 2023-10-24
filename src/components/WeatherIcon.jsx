import React from "react";
import clear_icon from "../components/assets/clear.png";
import cloud_icon from "../components/assets/cloud.png";
import drizzle_icon from "../components/assets/drizzle.png";
import rain_icon from "../components/assets/rain.png";
import snow_icon from "../components/assets/snow.png";

function WeatherIcon({ icon }) {
  // Define a function to map weather icons
  const getWeatherIcon = (icon) => {
    switch (icon) {
      case "01d":
      case "01n":
        return clear_icon;
      case "02d":
      case "02n":
        return cloud_icon;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return drizzle_icon;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return rain_icon;
      case "13d":
      case "13n":
        return snow_icon;
      default:
        return cloud_icon;
    }
  };

  return <img src={getWeatherIcon(icon)} alt="cloud" style={{ width: '20%' }} />;
}

export default WeatherIcon;
