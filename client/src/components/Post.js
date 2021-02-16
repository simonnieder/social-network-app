import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "500px",
    padding: "1rem",
    color: "black",
    margin: "2rem",
    height: "fit-content",
  },
  text: {
    fontSize: "1rem",
    margin: "1rem 0",
  },
}));

const Posts = ({ title, text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <Typography variant="h4">{title}</Typography>
      <Typography className={classes.text}>{text}</Typography>
    </Card>
  );
};

export default Posts;
