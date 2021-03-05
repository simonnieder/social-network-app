import { IconButton, Tooltip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { MdDelete, MdExitToApp, MdSettings } from "react-icons/md";
import { useStyles } from "./NavbarSettingsStyle";
import axios from "axios";
import { useClickOutside } from "../../../hooks/useClickOutside";
import DeleteDialog from "../../Dialog/DeleteDialog";
const { REACT_APP_API_URL } = process.env;

const NavbarSettings = ({ username, setUsername }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handlePopupClose = () => {
    setPopupIsOpen(false);
  };
  const deleteUser = async () => {
    handlePopupClose();
    try {
      await axios.delete(REACT_APP_API_URL + username);
      setUsername("");
      setMenuIsOpen(false);
    } catch (error) {
      if (!error.response) {
        console.log("Error: Network Error");
      } else {
        console.log("Error: " + error.response.data.message);
      }
    }
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
      <DeleteDialog
        text="Do you really want to delete your account?"
        handleClose={handlePopupClose}
        handleDelete={deleteUser}
        open={popupIsOpen}
      ></DeleteDialog>
    </div>
  );
};

export default NavbarSettings;
