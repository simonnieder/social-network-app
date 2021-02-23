import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    maxHeight: "100vh",
  },
  form: {
    "& >*": {
      fontSize: "1.25rem",
    },
  },
  password: {
    marginBottom: "1rem",
  },
  paper: {
    padding: "2rem",
    width: "40%",
    minWidth: "300px",
  },
  signUpLink: {
    color: "#3498db",
  },
}));

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ error: "" });

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .get(REACT_APP_API_URL + username)
      .then((response) => {
        if (password == response.data.password) {
          props.onUserSubmit(username);
        } else {
          setError({ error: "Username or password incorrect" });
        }
      })
      .catch((error) => {
        if (!error.response) {
          setError({ error: "Network Error" });
        } else {
          setError({ error: "Username or password incorrect" });
        }
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h3">Login:</Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <TextField
            error={Boolean(error?.error)}
            label="username"
            fullWidth
            required
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            username
          </TextField>
          <TextField
            className={classes.password}
            error={Boolean(error?.error)}
            helperText={error?.error}
            label="password"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            password
          </TextField>
          <Button type="submit" color="primary" variant="contained">
            submit
          </Button>
        </form>
        <Link className={classes.signUpLink} to="/signup">
          <small>Sign up.</small>
        </Link>
      </Paper>
    </div>
  );
};

export default Login;