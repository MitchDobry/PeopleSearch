import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BasicModal(props) {
  const dateFormat = require("dateformat");
  const date = props.dob.date;
  const newDate = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={{ padding: "0.5rem" }} type="button" onClick={handleOpen}>
        more info
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Avatar
              alt={props.name.first}
              src={props.picture.thumbnail}
              style={{ width: "100px", height: "auto" }}
            />
            <Typography variant="h4" gutterBottom>
              {props.name.title}. {props.name.first} {props.name.last}
            </Typography>
            <Typography variant="h5" gutterBottom>
              E-mail: <Link href="mailto:{props.email}">{props.email}</Link>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Cellphone: <a href="tel:{props.cell}">{props.cell}</a>
            </Typography>
            <Typography color="textSecondary" component="h6">
              Date of Birth: {newDate}
              <br></br>
            </Typography>
            <Typography color="textSecondary" component="h6">
              Country: {props.location.country}
              <br></br>
              City: {props.location.city}
              <br></br>
              Postal-code: {props.location.postcode}
              <br></br>
              Street: {props.location.street.name}
              <br></br>
              Number: {props.location.street.number}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
