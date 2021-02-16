import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";
import CreatePost from "./components/CreatePost";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  app: {
    display: "grid",
    gridTemplateColumns: "350px auto",
  },
  options: {
    display: "flex",
    position: "absolute",
    margin: "1rem",
    top: "0",
    right: "0",
    "& *": {
      fontSize: "1.75rem",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >*": {
      marginRight: ".25rem",
    },
  },
}));
function App() {
  const [username, setUsername] = useState("");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.app}>
      <Router>
        <Sidebar />
        <Route path="/posts" component={Posts}></Route>
        {username === "" ? (
          <Route path="/login" render={() => <Login onUserSubmit={setUsername}></Login>}></Route>
        ) : (
          <Route
            path="/login"
            render={() => (
              <Button
                onClick={() => {
                  setUsername("");
                }}
                style={{ fontSize: "2rem" }}
              >
                You're logged in. Click to logout
              </Button>
            )}
          ></Route>
        )}
        <Switch>
          <Route path="/users/:userId" component={Profile}></Route>
          <Route path="/users" component={Users}></Route>
          {username == "" ? (
            <Route path="/signup" render={() => <Signup onUserSubmit={setUsername}></Signup>}></Route>
          ) : (
            <Route path="/signup" render={() => <Redirect to="/login"></Redirect>}></Route>
          )}
        </Switch>

        {username !== "" && <UserInfo username={username} onSetUsername={setUsername} onHandleClickOpen={handleClickOpen} />}
        <CreatePost
          open={open}
          handleClose={() => {
            handleClose();
          }}
          username={username}
        ></CreatePost>
      </Router>
    </div>
  );
}

export default App;
