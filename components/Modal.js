import React from "react";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div>
      <Dialog
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogContent
          id="modal-slide-description"
          className="mx-auto bg-primary"
        >
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
