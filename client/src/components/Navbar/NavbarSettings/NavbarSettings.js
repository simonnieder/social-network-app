import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Tooltip, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete, MdExitToApp, MdSettings } from "react-icons/md";
import { useStyles } from "./NavbarSettingsStyle";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

let useClickOutside = (handler) => {
  let ref = useRef();
  useEffect(() => {
    const clickHandler = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });
  return ref;
};

const NavbarSettings = ({ username, setUsername }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handlePopupClose = () => {
    setPopupIsOpen(false);
  };
  const deleteUser = async () => {
    handlePopupClose();
    const response = await axios.delete(REACT_APP_API_URL + username).catch((error) => {
      if (!error.response) {
        console.log("Error: Network Error");
      } else {
        console.log("Error: " + error.response.data.message);
      }
    });
    if (response === undefined) return;
    setUsername("");
    setMenuIsOpen(false);
  };

  let settings = useClickOutside(() => {
    setMenuIsOpen(false);
  });
  const classes = useStyles();
  return (
    <div className={classes.root} ref={settings}>
      <Tooltip title="settings">
        <IconButton
          className={classes.icon}
          onClick={() => {
            setMenuIsOpen((isopen) => !isopen);
          }}
        >
          <MdSettings></MdSettings>
        </IconButton>
      </Tooltip>
      {menuIsOpen && (
        <div className={classes.container}>
          <div
            className={classes.item}
            onClick={() => {
              setUsername("");
              setMenuIsOpen(false);
            }}
          >
            <MdExitToApp className={classes.icon}></MdExitToApp>
            <Typography>Logout</Typography>
          </div>
          <div
            className={classes.item}
            onClick={() => {
              setMenuIsOpen(false);
              setPopupIsOpen(true);
            }}
          >
            <MdDelete className={classes.icon}></MdDelete>
            <Typography>Delete Account</Typography>
          </div>
        </div>
      )}
      {popupIsOpen && (
        <Dialog open={popupIsOpen} onClose={handlePopupClose}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Do you really want to delete your account?</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handlePopupClose}>
              cancel
            </Button>
            <Button color="primary" variant="contained" onClick={deleteUser}>
              delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default NavbarSettings;
