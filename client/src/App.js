import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Users from "./components/Users";
import CreatePost from "./components/CreatePost";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { useState } from "react";
import Theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
let theme = Theme;

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

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Router>
          <Sidebar username={username} setUsername={setUsername} />

          {/*LOGIN*/}
          {username === "" ? (
            <Route path={["/login", "/"]} exact render={() => <Login onUserSubmit={setUsername}></Login>}></Route>
          ) : (
            <Route path="/login" render={() => <Redirect to={`/users/${username}`}></Redirect>}></Route>
          )}

          {/* USERS */}
          <Switch>
            <Route path="/users/:author" render={() => <Posts username={username}></Posts>}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>

          {/* SIGNUP */}
          {username == "" ? (
            <Route path="/signup" render={() => <Signup onUserSubmit={setUsername}></Signup>}></Route>
          ) : (
            <Route path="/signup" render={() => <Redirect to="/login"></Redirect>}></Route>
          )}

          {/*POSTS*/}
          <Route path="/posts" render={() => <Posts username={username}></Posts>}></Route>

          {/* CREATE POST */}
          <Route path="/create-post" render={() => <CreatePost username={username}></CreatePost>}></Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
