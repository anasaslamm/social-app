import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  IconButton,
  Checkbox,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useQuery } from "@tanstack/react-query";

const Post = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading posts.</Typography>;

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
              Ans
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea80c399456099.5ef337f651e1d.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.map((post) => (
              <Typography key={post.id}>{post.title}</Typography>
            ))}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
