import { Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Typography } from "@material-ui/core";
import Post from "./Post";
import { MdArrowBack } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
    position: "relative",
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
  card: {
    padding: "0.25rem",
    position: "absolute",
    margin: "1rem",
    top: "0",
    left: "0",
    color: "inherit",
  },
  icon: {
    fontSize: "1.75rem",
    color: "inherit",
    textDecoration: "none",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(REACT_APP_API_URL + "posts/" + userId).catch((error) => {
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

  const createProfileTitles = (userId) => {
    userId = userId.toUpperCase();
    if (userId.charAt(userId.length - 1) == "S") return userId + "'";
    return userId + "'S";
  };
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {createProfileTitles(userId)} POSTS
      </Typography>
      <div className={classes.container}>
        {posts
          .slice()
          .reverse()
          .map((post, index) => {
            return <Post key={index} title={post.title} text={post.text} author={post.author}></Post>;
          })}
      </div>

      <Card className={classes.card}>
        <IconButton component={Link} to={"/users"} style={{ zIndex: "999999" }}>
          <MdArrowBack className={classes.icon}></MdArrowBack>
        </IconButton>
      </Card>
    </div>
  );
};

export default Profile;
