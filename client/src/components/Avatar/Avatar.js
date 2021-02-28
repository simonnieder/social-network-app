import { useStyles } from "./AvatarStyle";
const Avatar = ({ name, style, className }) => {
  const classes = useStyles();
  if (name === undefined || name === "") return <div></div>;
  const letter = name.charAt(0).toUpperCase();
  return (
    <div className={classes.root} style={style}>
      {letter}
    </div>
  );
};

export default Avatar;
