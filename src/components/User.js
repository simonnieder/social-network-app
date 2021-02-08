import { makeStyles, Typography, Card } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
  },
  namesection: {
    display: "flex",
    alignItems: "center",
    "&>img": {
      marginRight: "1rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const User = ({ username }) => {
  const classes = useStyles();
  return (
    <RouterLink to={`/users/${username}`} className={classes.link}>
      <Card className={classes.root} variant="outlined">
        <div className={classes.namesection}>
          <img src="https://via.placeholder.com/50" alt="" style={{ borderRadius: "50%" }} />
          <Typography variant="h4">{username}</Typography>
        </div>
      </Card>
    </RouterLink>
  );
};

export default User;
