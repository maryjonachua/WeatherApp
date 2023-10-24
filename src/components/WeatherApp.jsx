import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import clear_icon from "../components/assets/clear.png";
import cloud_icon from "../components/assets/cloud.png";
import drizzle_icon from "../components/assets/drizzle.png";
import rain_icon from "../components/assets/rain.png";
import snow_icon from "../components/assets/snow.png";
import { Box, IconButton, Typography, Zoom } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "./SearchInput";
import WeatherForcast from "./WeatherForcast";
import WeatherDetails from "./WeatherDetails";
import DailyForCast from "./DailyForCast";
import { Search } from "@mui/icons-material";

function WeatherApp() {
  const [name, setName] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [tempFeel, setTempFeel] = useState("");
  const [forecastData, setForecastData] = useState([]);

  const [icon, setIcon] = useState(cloud_icon);
  const [open, setOpen] = useState(false);

  let api = "4268ff65156015016960eed8089f70d1";
  const defaultName = "Manila";

  useEffect(() => {
    if (!name) {
      fetchWeatherData(defaultName);
      fetchDailyForecast(defaultName);
    }
  }, []);

  const fetchWeatherData = async (cityName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api}`;
    try {
      let response = await fetch(url);

      if (response.ok) {
        let data = await response.json();

        if (data.main && data.wind && data.name) {
          let windSpeed = Math.round(data.wind.speed);
          let tempe = Math.round(data.main.temp);
          let tempeFeel = Math.round(data.main.feels_like);

          setHumidity(data.main.humidity);
          setWind(windSpeed);
          setTemperature(tempe);
          setLocation(data.name);
          setTempFeel(tempeFeel);
          setName("");
        }

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          setIcon(clear_icon);
        } else if (
          data.weather[0].icon === "02d" ||
          data.weather[0].icon === "02n"
        ) {
          setIcon(cloud_icon);
        } else if (
          data.weather[0].icon === "03d" ||
          data.weather[0].icon === "03n"
        ) {
          setIcon(drizzle_icon);
        } else if (
          data.weather[0].icon === "04d" ||
          data.weather[0].icon === "04n"
        ) {
          setIcon(drizzle_icon);
        } else if (
          data.weather[0].icon === "09d" ||
          data.weather[0].icon === "09n"
        ) {
          setIcon(rain_icon);
        } else if (
          data.weather[0].icon === "10d" ||
          data.weather[0].icon === "10n"
        ) {
          setIcon(rain_icon);
        } else if (
          data.weather[0].icon === "13d" ||
          data.weather[0].icon === "13n"
        ) {
          setIcon(snow_icon);
        } else {
          setIcon(clear_icon);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fetchDailyForecast = async (cityName) => {
    if (!cityName) {
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=Metric&appid=${api}`;
    try {
      let response = await fetch(url);

      if (response.ok) {
        let data = await response.json();
        if (data.list) {
          setForecastData(data.list.slice(0, 100));
        }
      }
    } catch (error) {
      console.error("An error occurred while fetching the forecast:", error);
    }
  };

  const handleSearch = () => {
    if (name.trim() === "") {
      toast.error("Please enter a valid city name", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    fetchWeatherData(name);
    fetchDailyForecast(name);
  };

  const handleOnChangeSearch = (e) => {
    setName(e.target.value);
  };

  const formatDate = (timestamp, showDay = false) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    if (showDay) {
      options.weekday = "short";
    }
    const dateStr = date.toLocaleDateString("en-US", options);
    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const [weekday, dateAndTime] = dateStr.split(", ");
    return (
      <span>
        {showDay && (
          <Typography variant="h4" sx={{ marginBottom: -3, fontWeight: 600 }}>
            {weekday}
          </Typography>
        )}{" "}
        <br />
        <Typography sx={{ marginBottom: -3 }} variant="body1">
          {dateAndTime}
        </Typography>{" "}
        <br />
        <Typography variant="body1">{timeStr}</Typography>
      </span>
    );
  };

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

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleClickSearch = () => {
    setOpen(true);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {/* container */}
      <div
        className="container"
        style={{
          width: "900px",
          height: "95vh",
          margin: "auto",
          marginTop: "20px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="top-nav"
            style={{
              display: "flex",
              justifyContent: open ? "center" : "end",
              marginRight: open ? "0" : "102px",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {open ? (
              <SearchInput
              className="open zoomIn"
                name={name}
                handleSearch={handleSearch}
                handleOnChangeSearch={handleOnChangeSearch}
                setOpen={setOpen}
              />
            ) : (
              <>
                <IconButton
                  onClick={handleClickSearch}
                  className={`searchIconButton ${open ? "open" : ""}`}
                >
                  <Search sx={{ fontSize: 45, color: "white" }} />
                </IconButton>
              </>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="content-weather"
          >
            {/* weather forcast ------------- */}

            <WeatherForcast
              currentDate={currentDate}
              location={location}
              icon={icon}
              temperature={temperature}
            />

            <br />
            {/* weather details */}
            <div
              className="footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid gray",
                backgroundColor: "white",
                color: "rgb(65, 66, 114)",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                fontWeight: "bold",
                borderRadius: 20,
                gap: 10,
              }}
            >
              <WeatherDetails
                wind={wind}
                humidity={humidity}
                tempFeel={tempFeel}
              />
            </div>
          </div>

          {forecastData.length > 0 && (
            <div className="daily-forecast">
              <DailyForCast
                forecastData={forecastData}
                formatDate={formatDate}
                getWeatherIcon={getWeatherIcon}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
