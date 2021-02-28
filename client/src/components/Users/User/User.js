import { Typography, Card } from "@material-ui/core";
import { useStyles } from "./UserStyle";
import Avatar from "../../Avatar/Avatar";
import { Link as RouterLink } from "react-router-dom";
const User = ({ username }) => {
  const classes = useStyles();
  return (
    <RouterLink to={`/users/${username}`} className={classes.link}>
      <Card className={classes.root} variant="outlined">
        <div className={classes.namesection}>
          <Avatar style={{ width: "40px", height: "40px", fontSize: "1.25rem", color: "white" }} name={username} />
          <Typography variant="h4">{username}</Typography>
        </div>
      </Card>
    </RouterLink>
  );
};

export default User;
