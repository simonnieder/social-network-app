import { Backdrop, Button, ButtonGroup, Typography } from "@material-ui/core";
import { MdDelete } from "react-icons/md";
import { useStyles } from "./DeleteDialogStyle";
import { useClickOutside } from "../../hooks/useClickOutside";
const DeleteDialog = ({ text, handleClose, handleDelete, open }) => {
  const classes = useStyles();
  let dialog = useClickOutside(() => {
    handleClose();
  });
  return (
    <Backdrop open={open} style={{ zIndex: 99999 }}>
      <div className={classes.root} ref={dialog}>
        <Typography variant="h5" className={classes.text}>
          {text}
        </Typography>
        <ButtonGroup>
          <Button
            disableElevation
            startIcon={<MdDelete></MdDelete>}
            color="primary"
            variant="contained"
            onClick={() => {
              handleDelete();
              handleClose();
            }}
          >
            delete
          </Button>
          <Button disableElevation color="primary" variant="outlined" onClick={handleClose}>
            cancel
          </Button>
        </ButtonGroup>
      </div>
    </Backdrop>
  );
};

export default DeleteDialog;
