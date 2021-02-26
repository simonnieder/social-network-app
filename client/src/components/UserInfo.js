import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { IconButton, Typography, Paper, Container, Avatar } from "@material-ui/core";
import { MdExitToApp, MdDelete } from "react-icons/md";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  options: {
    padding: "0.25rem 0.5rem",
    display: "flex",
    alignItems: "space-around",
    margin: "1rem",
    bottom: "0",
    left: "0",
    width: "80%",
    boxSizing: "default",
    "& *": {
      fontSize: "1.75rem",
    },
    color: "inherit",
    background: theme.palette.primary.main,
    border: "none",
  },
  profile: {
    overflow: "hidden",
    padding: "0",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    "& >*": {
      marginRight: ".25rem",
    },
  },
  icon: {
    color: "white",
  },
}));

const UserInfo = ({ username, onSetUsername }) => {
  const classes = useStyles();

  const deleteUser = async () => {
    const response = await axios.delete(REACT_APP_API_URL + username).catch((error) => {
      if (!error.response) {
        console.log("Error: Network Error");
      } else {
        console.log("Error: " + error.response.data.message);
      }
    });
    if (response === undefined) return;
    onSetUsername("");
  };
  return (
    <Paper className={classes.options} variant="outlined">
      <Container className={classes.profile} component={Link} to={`/users/${username}`}>
        <Avatar src={`https://avatars.dicebear.com/api/initials/${username}.svg`} alt="" style={{ height: "2rem", width: "2rem" }} />
        <Typography variant="h5">{username}</Typography>
      </Container>
      <IconButton onClick={deleteUser}>
        <MdDelete className={classes.icon}></MdDelete>
      </IconButton>
      <IconButton
        aria-label="exit"
        onClick={() => {
          onSetUsername("");
        }}
      >
        <MdExitToApp className={classes.icon}></MdExitToApp>
      </IconButton>
    </Paper>
  );
};

export default UserInfo;
