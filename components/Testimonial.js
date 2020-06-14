import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function Testimonial({ content = "", author = "", authorDescription = "" }) {
  return (
    <Card
      variant="outlined"
      style={{ flex: 1, margin: 10 }}
      backgroundColor="secondary"
    >
      <CardContent>
        <Typography variant="body1" component="p" gutterBottom>
          {content}
        </Typography>
        <Typography color="textSecondary" variant="h5" align="right">
          {author}
        </Typography>
        <Typography color="textSecondary" variant="body1" align="right">
          {authorDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Testimonial;
