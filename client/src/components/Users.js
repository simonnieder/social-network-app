import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "5rem",
    gridAutoRows: "5rem",
    columnGap: "2rem",
    rowGap: "2rem",
  },
  header: {
    textAlign: "center",
    marginTop: "1rem",
  },
});
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(REACT_APP_API_URL).catch((error) => {
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log("Error: " + error.response.data.message);
        }
      });
      if (response === undefined) return;
      setUsers(response.data);
      return response;
    };
    getUsers();
  }, []);
  const classes = useStyles();
  if (users === undefined) return;
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        USERS
      </Typography>
      <div className={classes.container}>
        {[
          users.map((user, index) => {
            return <User key={index} username={user.username}></User>;
          }),
        ]}
      </div>
    </div>
  );
};

export default Users;
