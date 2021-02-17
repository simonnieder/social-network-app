import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { PropTypes } from "prop-types";
const { REACT_APP_API_URL } = process.env;
const CreatePost = ({ open, handleClose, username }) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const post = async (username) => {
    const url = REACT_APP_API_URL + "posts";
    try {
      const request = await axios.post(url, {
        title: title,
        text: text,
        author: username,
      });
    } catch (err) {
      console.log("Post was not created");
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create a post</DialogTitle>{" "}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Post title"
          type="text"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          id="text"
          label="Post text"
          type="text"
          fullWidth
          rows={5}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={() => {
            post(username);
            handleClose();
          }}
          color="primary"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreatePost.propTypes = {
  open: PropTypes.bool,
};
export default CreatePost;
