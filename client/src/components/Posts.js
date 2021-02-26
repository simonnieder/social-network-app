import { Avatar, Dialog, DialogContent, DialogContentText, Typography, DialogActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Post from "./Post";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const { REACT_APP_API_URL } = process.env;
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.gray,
    padding: "2rem",
    color: "#393939",
  },
  title: {
    text: "center",
    marginLeft: "1rem",
  },
}));

const Posts = ({ username }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const { author } = useParams();
  const [toDelete, setToDelete] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      let path = "posts";
      if (author != undefined) {
        path += `/${author};`;
      }
      const response = await axios.get(REACT_APP_API_URL + path).catch((error) => {
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log("Error: " + error.response.data.message);
        }
      });
      if (response === undefined) return;
      setPosts(response.data);
    };
    getPosts();
  }, []);

  const deletePost = async () => {
    const id = toDelete;
    handleClose();
    const response = await axios.delete(REACT_APP_API_URL + "posts/" + id).catch((error) => {
      if (!error.response) {
        console.log("Error: Network Error");
      } else {
        console.log("Error: " + error.response.data.message);
      }
    });
    if (response === undefined) return;
    setPosts(posts.filter((element) => element.id != id));
  };

  const handleClose = () => {
    setToDelete("");
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {author != undefined && (
          <Avatar src={`https://avatars.dicebear.com/api/initials/${author}.svg`} alt="" style={{ height: "50px", width: "50px" }} />
        )}
        <Typography variant="h2" className={classes.title}>
          {author != undefined ? `${author}` : "All Posts"}
        </Typography>
      </div>
      <div className={classes.container}>
        {[
          posts
            .slice()
            .reverse()
            .map((post, index) => {
              return <Post key={index} post={post} username={username} deletePost={setToDelete}></Post>;
            }),
        ]}
      </div>
      {toDelete !== "" && (
        <Dialog open={toDelete} onClose={handleClose}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Do you really want to delete your post?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handleClose}>
              cancel
            </Button>
            <Button color="primary" variant="outlined" onClick={deletePost}>
              delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Posts;
