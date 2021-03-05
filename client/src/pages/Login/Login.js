import { Button, TextField, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStyles } from "./LoginStyle";
const { REACT_APP_API_URL } = process.env;

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ error: "" });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(REACT_APP_API_URL + username);
      if (password == response.data.password) {
        props.onUserSubmit(username);
      } else {
        setError({ error: "Username or password incorrect" });
      }
    } catch (error) {
      if (!error.response) {
        setError({ error: "Network Error" });
      } else {
        setError({ error: "Username or password incorrect" });
      }
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div variant="outlined" className={classes.paper}>
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
          <Button type="submit" color="primary" variant="contained" style={{ fontSize: "1.125em", padding: "0.125em 0.5em" }}>
            submit
          </Button>
        </form>
        <Link className={classes.signUpLink} to="/signup">
          <small>Sign up.</small>
        </Link>
      </div>
    </div>
  );
};

export default Login;
