import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "500px",
    padding: "1rem",
    color: "black",
    margin: "2rem",
    height: "fit-content",
  },
  text: {
    fontSize: "1.25rem",
    margin: "0.25rem 0",
  },
}));

const Posts = ({ title, text, author }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <Typography variant="h4">{title}</Typography>
      <Typography className={classes.text}>{text}</Typography>
      <Typography to={`/users/${author}`} variant="body1" component={Link}>
        <small>{author}</small>
      </Typography>
    </Card>
  );
};

export default Posts;
