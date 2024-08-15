import { SxProps } from "@mui/material";

export const styles = {
  skillsBox: {
    display: "flex",
    flexDirection: "column",
    p: { xs: "10px 30px", sm: "10px 50px" },
    color: "#fff",
    gap: 3,
    minHeight: "100vh",
  },
  heading: {
    fontFamily: "Poppins",
    borderBottom: "5px solid #b339fa",
    py: 1,
    fontSize: { xs: "30px", sm: "40px" },
    alignSelf: "center",
  },
  cardsBox: {
    display: "flex",
    mt: 3,
    gap: 2,
  },
  skillCard: {
    backgroundColor: "#cccccc20",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "zoom 0.3s",
    gap: 1,
    p: 3,
    "&:hover": {
      boxShadow: "#b339fa50 0px 3px 8px 5px",
    },
  },
  skillsIcon: {
    borderRadius: "50px",
    height: "80px",
    width: "80px",
  },
  skillHeading: {
    fontWeight: 600,
    fontSize: "20px",
    fontFamily: "Poppins",
  },
  skillDescription: {
    textAlign: "center",
    fontSize: "15px",
  },
} satisfies Record<string, SxProps>;
