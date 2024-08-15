import { SxProps } from "@mui/material";

export const styles = {
  projectBox: {
    display: "flex",
    flexDirection: "column",
    p: { xs: "10px 30px", sm: "10px 50px" },
    color: "#fff",
    gap: 3,
    minHeight: "100vh",
  },
  heading: {
    fontFamily: "Poppins",
    borderLeft: "7px solid #b339fa",
    px: 3,
    fontSize: { xs: "30px", sm: "40px" },
  },
  projectCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  projectTitle: {
    color: "#b339fa",
    fontWeight: 600,
  },
  projectDescription: {
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    gap: 2,
  },
  descriptionText: {
    textAlign: { xs: "center", sm: "left" },
  },
  imagesBox: {
    width: { xs: "100%", sm: "50%", md: "35%" },
    borderRadius: "30px",
  },
  image: {
    borderRadius: "30px",
    height: { xs: "300px" },
    width: "100%",
  },
} satisfies Record<string, SxProps>;
