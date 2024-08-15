import { SxProps } from "@mui/material";

export const styles = {
  contactBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: { xs: "10px 30px", sm: "10px 50px" },
    color: "#fff",
    gap: 4,
    height: { xs: "100%", lg: "100vh" },
  },
  heading: {
    fontFamily: "Poppins",
    borderBottom: "5px solid #b339fa",
    py: 1,
    fontSize: { xs: "30px", sm: "40px" },
    alignSelf: "flex-start",
  },
  formBox: {
    display: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    alignSelf: "center",
  },
  label: { color: "#fff" },
  input: {
    color: "#fff",
    border: "1px solid #b339fa",
    borderRadius: "10px",
    px: 2,
    width: { xs: "100%", sm: "300px", md:'400px' },
    "&:active": {
      outline: "2px solid #b339fa",
      background: "transparent",
    },
  },
  textareaField: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #b339fa",
    borderRadius: "10px",
    width: { xs: "100%", sm: "300px", md:'400px' },
    px: 2,
    outline: "none",
    "&:focus": {
      outline: "1px solid #b339fa",
    },
  },
  sendBtn: {
    alignSelf: "center",
    textTransform: "capitalize",
    color: "#fff",
    backgroundColor: "#b339fa",
    fontWeight: 600,
    borderRadius: "20px",
    width: "150px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#b339fa90",
    },
  },
} satisfies Record<string, SxProps>;
