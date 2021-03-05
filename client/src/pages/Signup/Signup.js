import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./SignupStyle";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
const { REACT_APP_API_URL } = process.env;

const Signup = ({ onUserSubmit }) => {
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
    try {
      axios.post(REACT_APP_API_URL, {
        username: username,
        password: password,
      });
      onUserSubmit(username);
    } catch (error) {
      if (!error.response) setError({ error: "Network Error" });
      setError({ error: "Username already in use" });
      console.log(error);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div variant="outlined" className={classes.paper}>
        <Typography variant="h3">Sign up:</Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <TextField
            error={Boolean(error?.error)}
            label="username"
            fullWidth
            required
            value={username}
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
            fullWidth
            required
            value={password}
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
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          >
            confirm password
          </TextField>
          <Button type="submit" color="primary" variant="contained" style={{ fontSize: "1.125em", padding: "0.125em 0.5em" }}>
            sign up
          </Button>
        </form>
        <Link className={classes.loginLink} to="/login">
          <small>Already have an account? Log in.</small>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
