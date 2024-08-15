import { SxProps } from "@mui/material";

export const styles = {
  experienceBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: { xs: "10px 30px", sm: "10px 50px" },
    color: "#fff",
    gap: 15,
    minHeight: "100vh",
  },
  heading: {
    fontFamily: "Poppins",
    borderLeft: "7px solid #b339fa",
    fontSize: { xs: "30px", sm: "40px" },
    px: 3,
  },
  step: {
    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
      color: "common.white",
      fontSize: { xs: "15px", sm: "18px" },
      fontWeight: 600,
    },
  },
  description: {
    color: "#fff",
    fontSize: { xs: "12px", sm: "14px" },
    textAlign: "center",
  },
} satisfies Record<string, SxProps>;
