import { Card, Typography, IconButton, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useStyles } from "./PostStyle";
import { useEffect, useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog";
import Alert from "../Alert/Alert";
const Post = ({ post, username, deletePost, editPost }) => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [isAlert, setIsAlert] = useState(false);
  const [inputRows, setInputRows] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    setText(text.replace(/[\r\n]+/g, "\n"));
    if (editMode === true) return;
    if (editMode === false) {
      if (title !== post.title || text !== post.text) {
        if (editPost(post, title, text)) {
          post.title = title;
          post.text = text;
          setIsAlert(true);
        }
      }
    }
  }, [editMode]);

  useEffect(() => {
    setInputRows(text.split(/\r\n|\r|\n/).length + 1);
  }, [text]);

  return (
    <div>
      <div className={classes.card}>
        {editMode ? (
          <div className={classes.editContainer}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={`${classes.input} ${classes.inputTitle}`} type="text" />
            <textarea
              rows={inputRows}
              value={text}
              className={`${classes.input} ${classes.text}`}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        ) : (
          <div>
            <Typography variant="h4">{title}</Typography>
            <Typography className={classes.text}>{text}</Typography>
          </div>
        )}

        <div className={classes.footerContainer}>
          <Typography to={`/users/${post.author}`} component={Link} className={classes.link}>
            <small>@{post.author}</small>
          </Typography>
          {post.author == username && (
            <div>
              <Tooltip title="edit post">
                <IconButton
                  onClick={() => {
                    setEditMode(!editMode);
                  }}
                >
                  <MdEdit className={classes.icon}></MdEdit>
                </IconButton>
              </Tooltip>
              <Tooltip title="delete post">
                <IconButton
                  onClick={() => {
                    setPopUpIsOpen(true);
                  }}
                >
                  <MdDelete className={classes.icon}></MdDelete>
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
      <DeleteDialog
        text="Do you really want to delete this post?"
        open={popUpIsOpen}
        handleClose={() => setPopUpIsOpen(false)}
        handleDelete={() => deletePost(post.id)}
      ></DeleteDialog>
      <Alert open={isAlert} onClose={() => setIsAlert(false)} message="Post was edited!"></Alert>
    </div>
  );
};

export default Post;
