import { Typography, Card } from "@material-ui/core";
import { useStyles } from "./UserStyle";
import Avatar from "../Avatar/Avatar";
import { Link as RouterLink } from "react-router-dom";
const User = ({ username }) => {
  const classes = useStyles();
  return (
    <RouterLink to={`/users/${username}`} className={classes.link}>
      <div className={classes.root} variant="outlined">
        <Avatar style={{ fontSize: "5em", color: "white" }} name={username} />
        <Typography variant="h4" style={{ textAlign: "center", wordBreak: "break-word" }}>
          {username}
        </Typography>
      </div>
    </RouterLink>
  );
};

export default User;
