import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

function DailyForCast({forecastData,formatDate,getWeatherIcon}) {
  return (
    <>
    <Box sx={{ margin: "0px 40px" }}>
              <Typography
                sx={{ marginBottom: 2, marginTop: 3, fontSize: 25 }}
                variant="h4"
              >
                Hourly Forecast
             
              </Typography>
            
              <Carousel responsive={responsive} centerMode>
                {forecastData.map((forecast, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: 4,
                      width: 100,
                      textAlign: "center",
                      border: "1px solid white",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      fontSize: "18px",
                     
                    }}
                  >
                    {formatDate(forecast.dt * 1000, true)}
                    <img
                      src={getWeatherIcon(forecast.weather[0].icon)}
                      alt={forecast.weather[0].description}
                      style={{ width: 50 }}
                    />
                    <br />
                    <Typography
                      sx={{ fontWeight: 500, fontSize: 25 }}
                      variant="body"
                    >
                      {forecast.main.temp.toFixed(1)}°C
                    </Typography>
                  </Box>
                ))}
              </Carousel>
            </Box>
    </>
  )
}

export default DailyForCast