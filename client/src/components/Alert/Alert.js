import { IconButton, Snackbar } from "@material-ui/core";
import React from "react";
import { MdClose } from "react-icons/md";
import { useStyles } from "./AlertStyle";
const Alert = ({ message, onClose, open }) => {
  const classes = useStyles();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      key={alert}
      className={classes.root}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <div>
        <span style={{ marginRight: "2rem" }}>{message}</span>
        <IconButton aria-label="close" color="inherit" size="small" onClick={onClose}>
          <MdClose fontSize="1.5rem" />
        </IconButton>
      </div>
    </Snackbar>
  );
};

export default Alert;
