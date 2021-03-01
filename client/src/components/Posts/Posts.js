import { Dialog, DialogContent, DialogContentText, Typography, DialogActions, Button } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import { useStyles } from "./PostsStyle";
import axios from "axios";
import Post from "./Post/Post";
import SearchBox from "../SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const { REACT_APP_API_URL } = process.env;

const Posts = ({ username }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { author } = useParams();
  const [toDelete, setToDelete] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      let path = "posts";
      if (author != undefined) {
        path += `/${author};`;
      }
      const response = await axios.get(REACT_APP_API_URL + path).catch((error) => {
        console.log(error.response.status);
      });
      if (response === undefined) return;
      setPosts(response.data);
      setFilteredPosts(response.data);
    };
    getPosts();
  }, [author]);

  const deletePost = async () => {
    const id = toDelete;
    handleClose();
    const response = await axios.delete(REACT_APP_API_URL + "posts/" + id).catch((error) => {
      console.log(error.response);
    });
    if (response === undefined) return;
    setPosts(posts.filter((element) => element.id != id));
  };

  const editPost = async (post, title, text) => {
    const newPost = { ...post, title: title, text: text };
    try {
      const response = await axios.put(REACT_APP_API_URL + "posts", newPost);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleClose = () => {
    setToDelete("");
  };
  const searchPosts = (query) => {
    function filterFunction(post) {
      if (post.title.toLowerCase().includes(query.toLowerCase())) return true;
      if (post.text.toLowerCase().includes(query.toLowerCase())) return true;
      if (post.author.toLowerCase().includes(query.toLowerCase())) return true;
      return false;
    }
    const filtered = posts.filter(filterFunction);
    setFilteredPosts(filtered);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          {author != undefined && <Avatar style={{ height: "50px", width: "50px", color: "white", fontSize: "1.75rem" }} name={author} />}
          <Typography variant="h2" className={classes.title}>
            {author != undefined ? `${author}` : "All Posts"}
          </Typography>
        </div>

        <SearchBox placeholder="search posts" onSearchChange={searchPosts}></SearchBox>
      </div>
      <div className={classes.container}>
        {filteredPosts.length > 0 ? (
          [
            filteredPosts
              .slice()
              .reverse()
              .map((post, index) => {
                return <Post key={post.id} post={post} username={username} deletePost={setToDelete} editPost={editPost}></Post>;
              }),
          ]
        ) : (
          <Typography className={classes.nothing}>nothing to see here!</Typography>
        )}
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
