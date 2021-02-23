import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflowY: "auto",
    margin: "0 auto",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "3rem",
    gridAutoRows: "5rem",
    columnGap: "2rem",
    rowGap: "2rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.gray,
    padding: "2rem",
    color: "#393939",
  },
  title: {
    text: "center",
    marginLeft: "1rem",
  },
}));
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
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Users
        </Typography>
      </div>
      <div className={classes.container} spacing={5}>
        {[
          users.map((user, index) => {
            return (
              <div item xs={3}>
                <User key={index} username={user.username}></User>
              </div>
            );
          }),
        ]}
      </div>
    </div>
  );
};

export default Users;
