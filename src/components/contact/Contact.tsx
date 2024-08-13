import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./ContactStyles";

interface Iprops {
  id: string;
}

export default function Contact({ id }: Iprops) {
  return (
    <Box sx={styles.contactBox} id={id}>
      <Typography variant={"h3"} sx={styles.heading}>
        Contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
      </Grid>
    </Box>
  );
}
