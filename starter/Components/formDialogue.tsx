import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/Home.module.scss"

export default function FormDialog({ open, handleSubmit,handleClose, name, setName }) {
  //   const [open, setOpen] = React.useState(false);

  // const handleSumbit = () => {};

  return (
    <div>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register under {name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Input your name Here, and sign the transaction
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const Message = ({open, message, className})=>{
  return (
    <Dialog open={open}>
      <div className={`${styles.message} ${className}`}>{message}</div>
    </Dialog>
  );
}
