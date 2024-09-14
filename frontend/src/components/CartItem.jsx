import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CartItem = (props) => {
  const { title, href, text, image, author } = props.data;
  return (
    <Card
      sx={{
        maxWidth: 325,
        borderRadius: 4,
        backgroundColor: "#111213",
        color: "white",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="h5" sx={{}}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};
export default CartItem;
