import React from 'react'
import { styled } from "@mui/system";
import { TextField } from '@mui/material';
import { LocationOn } from '@mui/icons-material';


const RoundedTextField = styled(TextField)(({ theme }) => ({
    borderRadius: "10px",
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      width: "550px",
      marginBottom: 20,
      border: "1px solid white",
      backgroundColor: "white",
      "& input::placeholder": {
        color: "transparent",
      },
    },
    "& .MuiInputLabel-root": {
      textAlign: "center",
    },
  }));

function SearchInput({handleOnChangeSearch,handleSearch,name,setOpen}) {
  return (
    <>
    
    <RoundedTextField
            size="small"
            id="outlined-basic"
            label="Search Location"
            variant="outlined"
            value={name}
            onChange={(e) => handleOnChangeSearch(e)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
                setOpen(false)
              }
            }}
            
          />
    
    
    
    </>
  )
}

export default SearchInput