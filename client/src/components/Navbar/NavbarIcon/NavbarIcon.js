import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarIconStyle";
const NavbarIcon = ({ icon, path, onClick }) => {
  const classes = useStyles();
  return (
    <Link to={path} className={`${classes.link} ${window.location.pathname === path && classes.active}`} onClick={onClick}>
      {icon}
    </Link>
  );
};

export default NavbarIcon;
