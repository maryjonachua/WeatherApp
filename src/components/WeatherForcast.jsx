import React from 'react'
import { TimeandLocation } from './TimeandLocation'
import { Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

function WeatherForcast({currentDate,location,temperature,icon}) {
  return (
    <>
    <img src={icon} alt="cloud" style={{ width: "20%" }} />
          <div
            className="degree-location-container"
            style={{ textAlign: "center" }}
          >
            <div className="degree">
              <Typography variant="h2">{temperature}°C</Typography>
            </div>
            <div className="degree">
              <Typography sx={{fontWeight:500}} variant="h4">
                <LocationOn /> {location}
              </Typography>
            </div>
            <TimeandLocation currentDate={currentDate} />
          </div>
    
    </>
  )
}

export default WeatherForcast