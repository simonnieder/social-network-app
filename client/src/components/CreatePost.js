import { TextField, Button, Paper, makeStyles, Typography, IconButton } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Alert } from "@material-ui/lab";
import { MdClose } from "react-icons/md";
import uniqid from "uniqid";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    maxHeight: "100vh",
  },
  paper: {
    padding: "2rem",
    width: "40%",
    minWidth: "300px",
  },
  alertContainer: {
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    padding: "3rem",
    maxHeight: "100vh",
    fontSize: "1.25rem",
  },
  alertstyle: {
    margin: "1rem 0",
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
  },
}));
const CreatePost = ({ username }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [alerts, setAlerts] = useState([]);
  const classes = useStyles();
  const submitForm = (e) => {
    e.preventDefault();
    const post = async (username) => {
      try {
        const request = await axios.post(REACT_APP_API_URL + "posts", {
          title: title,
          text: text,
          author: username,
          id: uniqid(),
        });
        setTitle("");
        setText("");
        setAlerts([...alerts, uniqid()]);
      } catch (err) {
        console.log("Post was not created");
      }
    };
    post(username);
  };

  return (
    <div className={classes.container}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h3">Create Post:</Typography>
        <form onSubmit={submitForm}>
          <TextField
            margin="dense"
            id="title"
            label="Post title"
            type="text"
            fullWidth
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          />
          <TextField
            margin="dense"
            id="text"
            label="Post text"
            type="text"
            fullWidth
            required
            rows={6}
            multiline
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            inputProps={{ style: { fontSize: "1.5rem" } }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          />

          <Button type="submit" color="primary" variant="contained" style={{ fontSize: "1.25rem" }}>
            Create
          </Button>
        </form>
      </Paper>
      <div className={classes.alertContainer}>
        {alerts.map((alert) => {
          return (
            <Alert
              className={classes.alertstyle}
              variant="filled"
              severity="success"
              key={alert}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlerts(alerts.filter((element) => element != alert));
                  }}
                >
                  <MdClose fontSize="2rem" />
                </IconButton>
              }
            >
              Post has been created!
            </Alert>
          );
        })}
      </div>
    </div>
  );
};

export default CreatePost;
