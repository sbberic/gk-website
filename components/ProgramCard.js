import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
function ProgramCard({ img = "", title = "", description = "", href = "" }) {
  return (
    <Card style={{ minWidth: 400, flex: 1, margin: 10 }} elevation={5}>
      <Link href={href} passHref>
        <CardActionArea>
          <CardMedia
            image={img}
            title={title}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
export default ProgramCard;
