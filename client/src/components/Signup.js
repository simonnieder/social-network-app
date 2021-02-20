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
      width: "100%",
      fontSize: "1.25rem",
    },
  },
  confirmPassword: {
    marginBottom: "1rem",
  },
  paper: {
    padding: "2rem",
    width: "40%",
    minWidth: "300px",
  },
  loginLink: {
    color: "#3498db",
  },
}));

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ error: "" });

  const submitForm = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setError({ error: "Passwords don't match." });
      return;
    }
    axios
      .post(REACT_APP_API_URL, {
        username: username,
        password: password,
      })
      .then((response) => {
        props.onUserSubmit(username);
      })
      .catch((error) => {
        if (!error.response) setError({ error: "Network Error" });
        setError({ error: "Username already in use" });
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h5">Sign up:</Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <TextField
            error={Boolean(error?.error)}
            label="username"
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            username
          </TextField>
          <TextField
            error={Boolean(error?.error)}
            label="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            password
          </TextField>
          <TextField
            className={classes.confirmPassword}
            error={Boolean(error?.error)}
            helperText={error?.error}
            label="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            confirm password
          </TextField>
          <Button type="submit" variant="outlined">
            sign up
          </Button>
        </form>
        <Link className={classes.loginLink} to="/login">
          <small>Already have an account? Log in.</small>
        </Link>
      </Paper>
    </div>
  );
};

export default Signup;
