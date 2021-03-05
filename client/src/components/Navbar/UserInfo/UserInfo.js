import { useStyles } from "./UserInfoStyle";
import { Link } from "react-router-dom";
import { Typography, Paper, Container } from "@material-ui/core";
import Avatar from "../../Avatar/Avatar";
const { REACT_APP_API_URL } = process.env;

const UserInfo = ({ username }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.options} variant="outlined">
      <Container className={classes.profile} component={Link} to={`/users/${username}`}>
        <Avatar style={{ width: "40px", height: "40px", fontSize: "1.25rem", color: "white" }} name={username} />
        <Typography variant="h5">{username}</Typography>
      </Container>
    </Paper>
  );
};

export default UserInfo;
