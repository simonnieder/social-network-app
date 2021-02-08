import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogContentText, DialogActions } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { PropTypes } from "prop-types";
const CreatePost = ({ open, handleClose, username }) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const post = async (username) => {
    const request = await axios
      .post(`http://localhost:12345/users/posts/${username}`, {
        title: title,
        text: text,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
      <DialogContent>
        <DialogContentText>Create your new post</DialogContentText>
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
          autoFocus
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
