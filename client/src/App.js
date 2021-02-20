import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";
import CreatePost from "./components/CreatePost";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "grid",
    gridTemplateColumns: "minmax(150px,30%) auto",
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
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    "& *": {
      fontSize: "1.25rem",
    },
  },
}));
function App() {
  const [username, setUsername] = useState("");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isNewPost, setIsNewPost] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("added post");
  }, [isNewPost]);
  return (
    <div className={classes.app}>
      <Router>
        <Sidebar />

        {/*LOGIN*/}
        {username === "" ? (
          <Route path="/login" render={() => <Login onUserSubmit={setUsername}></Login>}></Route>
        ) : (
          <Route
            path="/login"
            render={() => (
              <div className={classes.link}>
                <Button component={Link} to={`/users/${username}`}>
                  You're logged in. Click to view your profile.
                </Button>
              </div>
            )}
          ></Route>
        )}

        {/* USERS */}
        <Switch>
          <Route path="/users/:userId" component={Profile}></Route>
          <Route path="/users" component={Users}></Route>
        </Switch>

        {/* SIGNUP */}
        {username == "" ? (
          <Route path="/signup" render={() => <Signup onUserSubmit={setUsername}></Signup>}></Route>
        ) : (
          <Route path="/signup" render={() => <Redirect to="/login"></Redirect>}></Route>
        )}

        {/*POSTS*/}
        <Route path="/posts" render={() => <Posts isNewPost={isNewPost}></Posts>}></Route>
        {/* CREATE POST */}
        {username !== "" && <UserInfo username={username} onSetUsername={setUsername} onHandleClickOpen={handleClickOpen} />}
        <CreatePost
          isNewPost={isNewPost}
          setIsNewPost={setIsNewPost}
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
