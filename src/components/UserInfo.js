import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { IconButton, Typography, Card, Container } from "@material-ui/core";
import { MdExitToApp, MdAdd } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  options: {
    padding: "0.25rem 0.5rem",
    display: "flex",
    position: "absolute",
    margin: "1rem",
    top: "0",
    right: "0",
    "& *": {
      fontSize: "1.75rem",
    },
    color: "inherit",
  },
  profile: {
    padding: "0",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >*": {
      marginRight: ".25rem",
    },
  },
}));

const UserInfo = ({ username, onSetUsername, onHandleClickOpen }) => {
  const classes = useStyles();
  return (
    <Card className={classes.options}>
      <Container className={classes.profile} component={Link} to={`/users/${username}`}>
        <img src="https://via.placeholder.com/30" alt="" style={{ borderRadius: "50%" }} />
        <Typography variant="h5">{username}</Typography>
      </Container>
      <IconButton aria-label="add" onClick={onHandleClickOpen}>
        <MdAdd></MdAdd>
      </IconButton>
      <IconButton
        aria-label="exit"
        onClick={() => {
          onSetUsername("");
        }}
      >
        <MdExitToApp></MdExitToApp>
      </IconButton>
    </Card>
  );
};

export default UserInfo;
