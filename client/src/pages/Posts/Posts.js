import { Typography } from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";
import { useStyles } from "./PostsStyle";
import axios from "axios";
import Post from "../../components/Post/Post";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const { REACT_APP_API_URL } = process.env;

const Posts = ({ username }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { author } = useParams();
  useEffect(() => {
    const getPosts = async () => {
      let path = "posts";
      if (author != undefined) {
        path += `/${author}`;
      }
      try {
        const response = await axios.get(REACT_APP_API_URL + path);
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        if (!error.response) console.log("Not reachable!");
        console.log(error.response);
      }
    };
    getPosts();
  }, [author]);

  const deletePost = async (id) => {
    try {
      await axios.delete(REACT_APP_API_URL + "posts/" + id);
      setPosts(posts.filter((element) => element.id != id));
      setFilteredPosts(filteredPosts.filter((element) => element.id != id));
    } catch (error) {
      if (!error.response) console.log("Not reachable!");
      console.log(error.response);
    }
  };

  const editPost = async (post, title, text) => {
    const newPost = { ...post, title: title, text: text };
    try {
      await axios.put(REACT_APP_API_URL + "posts", newPost);
    } catch (e) {
      return false;
    }
    return true;
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
              .map((post) => {
                return <Post key={post.id} post={post} username={username} deletePost={deletePost} editPost={editPost}></Post>;
              }),
          ]
        ) : (
          <Typography className={classes.nothing}>nothing to see here!</Typography>
        )}
      </div>
    </div>
  );
};

export default Posts;
