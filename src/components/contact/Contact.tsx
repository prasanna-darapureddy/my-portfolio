import {
  Box,
  Button,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
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
      <Stack direction="column" justifyContent={'center'}alignItems={"center"} gap={3}>
        <Stack direction="column">
          <InputLabel sx={{ color: "#fff" }}>To</InputLabel>
          <InputBase
            sx={{ border: "1px solid #b339fa", borderRadius: "10px" }}
          />
        </Stack>
        <Stack direction="column">
          <InputLabel sx={{ color: "#fff" }}>Subject</InputLabel>
          <InputBase
            sx={{ border: "1px solid #b339fa", borderRadius: "10px" }}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            color: "#fff",
            backgroundColor: "#b339fa",
            fontWeight: 600,
            borderRadius: "20px",
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}
