import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./ProjectsStyles";

interface Iprops {
  id: string;
}

export default function Projects({ id }: Iprops) {
  return (
    <Box sx={styles.projectBox} id={id}>
      <Typography variant={"h3"} sx={styles.heading}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
      </Grid>
    </Box>
  );
}
