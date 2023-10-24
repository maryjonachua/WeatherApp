import { Box, Typography } from '@mui/material'
import React from 'react'

export const TimeandLocation = ({currentDate}) => {
  return (
    <>
    <br/>
    <Box>
         <Typography sx={{fontWeight:500,marginTop:-3}} variant='h6'>{currentDate}</Typography>
    </Box>
    </>
  )
}
