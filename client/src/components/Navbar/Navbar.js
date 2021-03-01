import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";
import { Button } from "@material-ui/core";
import { useStyles } from "./NavbarStyle";
import NavbarIcon from "./NavbarIcon/NavbarIcon";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople, BsPerson } from "react-icons/bs";
import NavbarSettings from "./NavbarSettings/NavbarSettings";
import { BiMessageAdd } from "react-icons/bi";
const Navbar = ({ username, setUsername }) => {
  const [url, setUrl] = useState("");
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      setUrl(location.pathname);
    });
  }, [history]);

  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div style={{ display: "flex", height: "100%" }}>
        <NavbarIcon icon={<AiOutlineHome></AiOutlineHome>} path="/"></NavbarIcon>
        <NavbarIcon icon={<BsPeople></BsPeople>} path="/users"></NavbarIcon>

        {username != "" && (
          <>
            <NavbarIcon icon={<BsPerson></BsPerson>} path={`/users/${username}`}></NavbarIcon>
            <NavbarIcon icon={<BiMessageAdd></BiMessageAdd>} path="/create-post"></NavbarIcon>{" "}
          </>
        )}
      </div>
      {username != "" ? (
        <div style={{ display: "flex" }}>
          <UserInfo username={username}></UserInfo>
          <NavbarSettings setUsername={setUsername} username={username}></NavbarSettings>
        </div>
      ) : (
        <Button className={classes.button} variant="outlined" component={Link} to="/login">
          Login
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
