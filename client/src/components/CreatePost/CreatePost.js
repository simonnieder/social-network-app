import { TextField, Button, Paper, Typography, IconButton } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import uniqid from "uniqid";
import { Snackbar } from "@material-ui/core";
import { useStyles } from "./CreatePostStyle";
const { REACT_APP_API_URL } = process.env;
const CreatePost = ({ username }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isAlert, setIsAlert] = useState(false);
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
        setIsAlert(true);
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
      {isAlert && (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          key={alert}
          className={classes.alertstyle}
          open={true}
          autoHideDuration={5000}
          onClose={() => {
            setIsAlert(false);
          }}
        >
          <div>
            <span style={{ marginRight: "2rem" }}>Post created!</span>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsAlert(false);
              }}
            >
              <MdClose fontSize="1.5rem" />
            </IconButton>
          </div>
        </Snackbar>
      )}
    </div>
  );
};

export default CreatePost;
