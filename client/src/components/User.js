import { makeStyles, Typography, Card, Avatar } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  namesection: {
    display: "flex",
    alignItems: "center",
    "&>h4": {
      marginLeft: ".5rem",
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
          <Avatar src={`https://avatars.dicebear.com/api/initials/${username}.svg`} alt="" />
          <Typography variant="h4">{username}</Typography>
        </div>
      </Card>
    </RouterLink>
  );
};

export default User;
