import { Typography, Grid } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User/User";
import { useStyles } from "./UsersStyle";
const { REACT_APP_API_URL } = process.env;

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
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Users
        </Typography>
      </div>
      <div className={classes.container}>
        {users.length > 0 ? (
          [
            users.map((user, index) => {
              return (
                <div>
                  <User key={index} username={user.username}></User>
                </div>
              );
            }),
          ]
        ) : (
          <Typography className={classes.nothing}>nothing to see here!</Typography>
        )}
      </div>
    </div>
  );
};

export default Users;
