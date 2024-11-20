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

import { json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function homeLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log("API response status:", response.status);
  const posts = await response.json();
  // console.log("Posts data:", posts);
  return json(posts);
}

export function Home_Layout() {
  const posts = useLoaderData() || [];
  console.log("Posts in Home_Layout:", posts); // Fallback to an empty array

  if (!Array.isArray(posts) || posts.length === 0) {
    return <h2>No posts available</h2>;
  }

  return (
    <React.Fragment>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: "20px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                {post.title[0]?.toUpperCase() || "P"}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={`Post IDs: ${post.id}`}
          />
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/400x200" // Placeholder image for posts
            alt={`Image for ${post.title}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.body}
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
      ))}
      {/* <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </React.Fragment>
  );
}

// const Post = () => {
//   //   const { data, isLoading, error } = useQuery({
//   //     queryKey: ["post"],
//   //     queryFn: () =>
//   //       fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//   //         res.json()
//   //       ),
//   //   });

//   //   if (isLoading) return <Typography>Loading...</Typography>;
//   //   if (error) return <Typography>Error loading posts.</Typography>;

//   const posts = useLoaderData();

//   return (
//     <React.Fragment>
//       <Card>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
//               Ans
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Shrimp and Chorizo Paella"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           component="img"
//           height="300"
//           image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea80c399456099.5ef337f651e1d.jpg"
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {data.map((post) => (
//               <Typography key={post.id}>{post.title}</Typography>
//             ))}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <Checkbox
//               icon={<FavoriteBorder />}
//               checkedIcon={<Favorite sx={{ color: "red" }} />}
//             />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default Post;
