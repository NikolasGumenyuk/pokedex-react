import { useEffect, useState } from "react";
import React from "react";
import { getGifUrl } from "../../helpers";
import useStyles from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from '@mui/material/Button';

const Cards = ({ item, setTypes }) => {
  // console.log(item);
  const classes = useStyles();
  const src = getGifUrl(item.id);

  return (
    // <Box className={classes.card}>
    //   <img className={classes.image} src={src} alt={item.name} />

    //   {item.name}

    // </Box>
    <Card 
      sx={{ maxWidth: 345 }}
      className={classes.card}
      >
        <img className={classes.image} src={item.sprites.front_default} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
            {item.types.map((item) => (
              <Button variant="outlined" key={item.type.name} onClick={() => setTypes(prev =>[...prev, item.type.name])}>{item.type.name}</Button>

            ))}
        </CardContent>
    </Card>
  );
};

export default Cards;
