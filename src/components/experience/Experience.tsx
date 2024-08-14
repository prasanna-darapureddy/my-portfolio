import { School, Work } from "@mui/icons-material";
import {
  Box,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import { styles } from "./ExperienceStyles";

interface Iprops {
  id: string;
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

export default function Experience({ id }: Iprops) {
  const ColorlibStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <School />,
      2: <Work />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  };

  const steps = ["CCBP 4.0 Intensive NXT Wave", "Extended Web App Tech LLP"];

  return (
    <Box sx={styles.experienceBox} id={id}>
      <Typography variant={"h3"} sx={styles.heading}>
        Experience
      </Typography>

      <Stack  spacing={4} mt={5}>
        <Stepper
          alternativeLabel
          activeStep={1}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label} sx={styles.step}>
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                optional={
                  index === 0 ? (
                    <Typography variant="caption" sx={styles.description}>
                      Hands-on experience projects on platform and completed
                      mini project too.
                    </Typography>
                  ) : (
                    <Typography variant="caption" sx={styles.description}>
                      Demonstrated ability to collaborate with cross-functional
                      teams. Participated in meetings and discussions to work
                      effectively.
                    </Typography>
                  )
                }
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Box>
  );
}
