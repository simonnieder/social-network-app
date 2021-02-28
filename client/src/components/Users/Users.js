import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User/User";
import { useStyles } from "./UsersStyle";
import SearchBox from "../SearchBox/SearchBox";
const { REACT_APP_API_URL } = process.env;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
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
      setFilteredUsers(response.data);
      return response;
    };
    getUsers();
  }, []);

  const searchUsers = (query) => {
    const filtered = users.filter((user) => user.username.toLowerCase().includes(query.toLowerCase()));
    setFilteredUsers(filtered);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Users
        </Typography>
        <SearchBox placeholder="search users" onSearchChange={searchUsers}></SearchBox>
      </div>
      <div className={classes.container}>
        {filteredUsers.length > 0 ? (
          [
            filteredUsers.map((user) => {
              return <User key={user.username} username={user.username}></User>;
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
