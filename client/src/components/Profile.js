import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Post from "./Post";
import { MdArrowBack } from "react-icons/md";
import { useParams } from "react-router-dom";
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

const Profile = ({ username }) => {
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
    if (userId.charAt(userId.length - 1).toLowerCase() == "s") return userId + "'";
    return userId + "'s";
  };
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        {createProfileTitles(userId)} Posts
      </Typography>
      <div className={classes.container}>
        {posts
          .slice()
          .reverse()
          .map((post, index) => {
            return <Post key={index} post={post} username={username}></Post>;
          })}
      </div>
      <div className={classes.card}>
        <IconButton href="javascript:history.back()">
          <MdArrowBack></MdArrowBack>
        </IconButton>
      </div>
    </div>
  );
};

export default Profile;
