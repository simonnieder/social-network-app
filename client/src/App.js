import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import CreatePost from "./components/CreatePost/CreatePost";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles } from "./AppStyle";
let theme = Theme;

function App() {
  const [username, setUsername] = useState("");
  const classes = useStyles();
  useEffect(() => {
    if (window.localStorage.getItem("social-network-username") !== null) {
      setUsername(window.localStorage.getItem("social-network-username"));
    }
  }, []);
  useEffect(() => {
    if (username !== "") {
      window.localStorage.setItem("social-network-username", username);
    } else {
      window.localStorage.removeItem("social-network-username");
    }
  }, [username]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Router>
          <Sidebar username={username} setUsername={setUsername} />

          <Switch>
            {/*LOGIN*/}
            <Route path={["/login"]}>
              {username === "" ? <Login onUserSubmit={setUsername}></Login> : <Redirect to={`/users/${username}`}></Redirect>}
            </Route>
            {/* SIGNUP */}
            <Route path="/signup">
              {username === "" ? <Signup onUserSubmit={setUsername}></Signup> : <Redirect to={`/users/${username}`}></Redirect>}
            </Route>
            {/* PROFILE */}
            <Route path="/users/:author">
              <Posts username={username}></Posts>
            </Route>
            {/* USERS */}
            <Route path="/users" component={Users}></Route>
            {/*POSTS*/}
            <Route path="/posts" render={() => <Posts username={username}></Posts>}></Route>
            {/* CREATE POST */}
            <Route path="/create-post">{username !== "" && <CreatePost username={username}></CreatePost>}</Route>
            <Redirect to={`/posts`}></Redirect>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
