import { Card, Typography, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "500px",
    padding: "1rem",
    color: "black",
    margin: "1rem",
    wordBreak: "break-word",
  },
  text: {
    fontSize: "1.25rem",
    margin: "0.25rem 0",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Post = ({ post, username, deletePost }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <Typography variant="h4">{post.title}</Typography>
      <Typography className={classes.text}>{post.text}</Typography>
      <div className={classes.footerContainer}>
        <Typography to={`/users/${post.author}`} component={Link}>
          <small>{post.author}</small>
        </Typography>
        {post.author == username && (
          <Tooltip title="delete post">
            <IconButton
              onClick={() => {
                deletePost(post.id);
              }}
            >
              <MdDelete className={classes.icon}></MdDelete>
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Card>
  );
};

export default Post;
