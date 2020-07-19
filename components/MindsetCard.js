import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

function MindsetCard({ title, img, description }) {
  return (
    <Card style={{ flex: 1, height: "100%", borderRadius: 0 }} elevation={1}>
      <CardMedia
        image={img}
        title={title}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 230,
          flex: "none",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          style={{
            color: "white",
            padding: "20px",
            backgroundColor: " rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </Typography>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MindsetCard;
