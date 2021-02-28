import { Card, Typography, IconButton, Tooltip, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit, MdClose } from "react-icons/md";
import { useStyles } from "./PostStyle";
import { useEffect, useState } from "react";
const Post = ({ post, username, deletePost, editPost }) => {
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
    setInputRows(text.split(/\r\n|\r|\n/).length);
  }, [text]);

  return (
    <div>
      <Card className={classes.card} variant="outlined">
        {editMode ? (
          <div className={classes.editContainer}>
            <input
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className={`${classes.input} ${classes.inputTitle}`}
              type="text"
            />
            <textarea
              rows={inputRows}
              value={text}
              required
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
          <Typography to={`/users/${post.author}`} component={Link}>
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
                    deletePost(post.id);
                  }}
                >
                  <MdDelete className={classes.icon}></MdDelete>
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
      </Card>

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
            <span style={{ marginRight: "2rem" }}>Post edited!</span>
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

export default Post;
