import { Thermostat, WaterDrop } from '@mui/icons-material'
import AirIcon from "@mui/icons-material/Air";
import { Typography } from '@mui/material';
import React from 'react'

function WeatherDetails({tempFeel,humidity,wind}) {
  return (
    <>
    <div
              style={{
                width: 150,
                textAlign: "center",
                padding: 20,

                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
              className="temperature-feels"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 15,
                }}
              ></div>
              <Thermostat />
              <div>
                <Typography sx={{ fontSize: "25px" }} variant="body">
                  {tempFeel}°C 
                
                </Typography>
                <Typography fontSize={12} sx={{fontWeight:500}}>Feels</Typography>
              </div>
            </div>


            <div
              style={{
                width: 150,
                textAlign: "center",
                padding: 20,
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
              className="temperature"
            >
              <WaterDrop />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 15,
                }}
              ></div>
              <div>
                <Typography sx={{ fontSize: "25px" }} variant="body">
                  {humidity}%
                </Typography>
                <Typography fontSize={12} sx={{fontWeight:500}}>Humidity</Typography>
              </div>
            </div>

            <div
              style={{
                width: 150,
                textAlign: "center",
                padding: 20,
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
              className="temperature"
            >
              <AirIcon />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 15,
                }}
              ></div>
              <div>
                <Typography
                  sx={{ fontSize: "25px", display: "flex", alignItems: "end" ,justifyContent:'center'}}
                  variant="body"
                >
                  {wind}
                  <Typography sx={{ fontSize: "12px" }}>km/h</Typography>
                </Typography>
                <Typography fontSize={12} sx={{fontWeight:500}}>Wind Speed</Typography>
              </div>
            </div>
    
    </>
  )
}

export default WeatherDetails