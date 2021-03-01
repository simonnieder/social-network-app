import React, { useState } from "react";
import { useStyles } from "./UserInfoStyle";
import { Link } from "react-router-dom";
import { Typography, Paper, Container } from "@material-ui/core";
import axios from "axios";
import Avatar from "../../Avatar/Avatar";
const { REACT_APP_API_URL } = process.env;

const UserInfo = ({ username, onSetUsername }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const deleteUser = async () => {
    handleClose();
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Paper className={classes.options} variant="outlined">
      <Container className={classes.profile} component={Link} to={`/users/${username}`}>
        <Avatar style={{ width: "40px", height: "40px", fontSize: "1.25rem", color: "white" }} name={username} />
        <Typography variant="h5">{username}</Typography>
      </Container>
    </Paper>
  );
};

export default UserInfo;
