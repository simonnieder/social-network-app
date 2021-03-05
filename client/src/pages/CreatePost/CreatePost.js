import { TextField, Button, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import uniqid from "uniqid";
import Alert from "../../components/Alert/Alert";
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
        await axios.post(REACT_APP_API_URL + "posts", {
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
      <div variant="outlined" className={classes.paper}>
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

          <Button type="submit" color="primary" variant="contained" style={{ fontSize: "1.125em", padding: "0.125em 0.5em" }}>
            Create
          </Button>
        </form>
      </div>
      <Alert open={isAlert} onClose={() => setIsAlert(false)} message="Post was edited!"></Alert>
    </div>
  );
};

export default CreatePost;
