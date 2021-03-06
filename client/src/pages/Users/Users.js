import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "../../components/User/User";
import { useStyles } from "./UsersStyle";
import SearchBox from "../../components/SearchBox/SearchBox";
const { REACT_APP_API_URL } = process.env;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(REACT_APP_API_URL);
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log("Error: " + error.response.data.message);
        }
      }
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
      <Grid container spacing={2} className={classes.container}>
        {filteredUsers.length > 0 ? (
          [
            filteredUsers.map((user) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
                  <User key={user.username} username={user.username}></User>{" "}
                </Grid>
              );
            }),
          ]
        ) : (
          <Typography className={classes.nothing}>nothing to see here!</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Users;
