import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./cocktail.css";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component={() => (
            <LazyLoadImage
              src={image}
              alt={name}
              effect="blur"
              style={{ objectFit: "cover" }}
              className="img"
            />
          )}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {glass}
          </Typography>
          <Typography variant="body2" sx={{ color: "green" }}>
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Link to={`/cocktail/${id}`}>
          <Button size="small" color="primary">
            details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cocktail;
