import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  Paper,
  Container,
  Avatar,
  Tooltip,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
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
        <Avatar src={`https://avatars.dicebear.com/api/initials/${username}.svg`} alt="" style={{ height: "2rem", width: "2rem" }} />
        <Typography variant="h5">{username}</Typography>
      </Container>
      <Tooltip title="delete account">
        <IconButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MdDelete className={classes.icon}></MdDelete>
        </IconButton>
      </Tooltip>
      <Tooltip title="log out">
        <IconButton
          aria-label="exit"
          onClick={() => {
            onSetUsername("");
          }}
        >
          <MdExitToApp className={classes.icon}></MdExitToApp>
        </IconButton>
      </Tooltip>

      {isOpen && (
        <Dialog open={isOpen} onClose={handleClose}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Do you really want to delete your account?</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handleClose}>
              cancel
            </Button>
            <Button color="primary" variant="outlined" onClick={deleteUser}>
              delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Paper>
  );
};

export default UserInfo;
