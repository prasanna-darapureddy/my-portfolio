import { EmailOutlined, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { styles } from "../portfolio/Portfoliostyles";
import "./NameBanner.css";
import { useState } from "react";

export default function SocialLinks() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="social-div">
      <a
        href="https://github.com/prasanna-darapureddy"
        target="_blank"
        rel="noreferrer"
      >
        <div className="icon-div">
          <GitHub sx={styles.socialIcons} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/prasanna-darapureddy"
        target="_blank"
        rel="noreferrer"
      >
        <div className="icon-div">
          <LinkedIn sx={styles.socialIcons} />
        </div>
      </a>

      <a
        href="mailto:nagaprasanna18@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className="icon-div">
          <EmailOutlined sx={styles.socialIcons} />
        </div>
      </a>
      <div className="icon-div" onClick={handleClickOpen}>
        <Phone sx={styles.socialIcons} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={styles.dialogTitle}>
          Contact
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={styles.dialogContent}
          >
            <span>Email: nagaprasanna18@gmail.com</span>
            <span>Mobile : +91 7075680073</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={styles.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
