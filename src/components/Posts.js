import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Post from "./Post";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
  },
  container: {
    display: "grid",
    margin: "auto",
    justifyItems: "center",
    overflow: "auto",
  },
  header: {
    textAlign: "center",
    margin: "1rem 0",
  },
}));

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:12345/users/posts").catch((error) => {
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log("Error: " + error.response.data.message);
        }
      });
      if (response === undefined) return;
      setPosts(response.data);
      return response;
    };
    getPosts();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        ALL POSTS
      </Typography>
      <div className={classes.container}>
        <div>
          {[
            posts
              .slice()
              .reverse()
              .map((post, index) => {
                return <Post key={index} title={post.title} text={post.text}></Post>;
              }),
          ]}
        </div>
      </div>
    </div>
  );
};

export default Posts;
