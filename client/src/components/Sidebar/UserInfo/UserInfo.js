import React, { useState } from "react";
import { useStyles } from "./UserInfoStyle";
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  Paper,
  Container,
  Tooltip,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { MdExitToApp, MdDelete } from "react-icons/md";
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
        <Avatar style={{ width: "40px", height: "40px", fontSize: "1.25rem" }} name={username} />
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
