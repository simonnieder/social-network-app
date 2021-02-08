import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Post from "./Post";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
  },
  container: {
    display: "grid",
    justifyItems: "center",
    overflow: "auto",
    maxHeight: "100vh",
  },
  header: {
    textAlign: "center",
    margin: "1rem",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(`http://localhost:12345/users/posts/${userId}`).catch((error) => {
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
    getProfile();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        POSTS
      </Typography>
      <div className={classes.container}>
        {posts
          .slice()
          .reverse()
          .map((post, index) => {
            return <Post key={index} title={post.title} text={post.text}></Post>;
          })}
      </div>
    </div>
  );
};

export default Profile;
