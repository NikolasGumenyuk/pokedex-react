import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import useStyles from './styles';
import { getGifUrl } from '../../helpers';

const Cards = ({ item, setTypes }) => {
  const classes = useStyles();
  const src = getGifUrl(item.id);

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classes.card}
    >
      <img className={classes.image} src={src} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        {item.types.map((item) => (
          <Button variant="outlined" key={item.type.name} onClick={() => setTypes((prev) => [...prev, item.type.name])}>{item.type.name}</Button>

        ))}
      </CardContent>
    </Card>
  );
};

export default Cards;
