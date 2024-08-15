import { SxProps } from "@mui/material";

export const styles = {
  menusBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    color:'white',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    gap: 3,
  },
  socialIcons: {
    fontSize: 28,
  },
  dialogTitle: {
    fontWeight: 600,
    color: "#b339fa",
  },
  dialogContent: {
    fontWeight: 600,
    fontFamily:"Poppins",
    color: "#000",
    display:'flex',
    flexDirection:'column',
    gap:2,
  },
  button: {
    textTransform: "capitalize",
    color: "#b339fa",
    fontWeight: 600,
  },
} satisfies Record<string, SxProps>;
