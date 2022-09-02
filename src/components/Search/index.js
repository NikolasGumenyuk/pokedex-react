import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = ({ setSearch }) => {
  
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        fullWidth
        label="Search your pokemon"
        id="outlined-search"
        type="search"
      />
    </Box>
  );
};

export default Search;
