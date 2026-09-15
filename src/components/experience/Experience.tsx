import { School, Work } from '@mui/icons-material';
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
} from '@mui/material';
import { styles } from './ExperienceStyles';

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
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

export default function Experience({ id }: Iprops) {
  const ColorlibStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <School />,
      2: <Work />,
      3: <Work />,
      4: <Work />,
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  };

  const steps = [
    'CCBP 4.0 Intensive NXT Wave',
    'Extended Web App Tech LLP',
    'Vedhas Technology Solutions Pvt Ltd',
    'Sigur Solutions LLC',
  ];

  return (
    <Box sx={styles.experienceBox} id={id}>
      <Typography variant={'h3'} sx={styles.heading}>
        Experience
      </Typography>

      <Stack spacing={4} alignSelf={'center'}>
        <Stepper alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
          {steps.map((label, index) => (
            <Step key={label} sx={styles.step}>
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                optional={
                  index === 0 ? (
                    <Typography variant="caption" sx={styles.description}>
                      Hands-on experience projects on platform and completed mini project too.
                    </Typography>
                  ) : index === 1 ? (
                    <Typography variant="caption" sx={styles.description}>
                      Demonstrated ability to collaborate with cross-functional teams. Participated
                      in meetings and discussions to work effectively.
                    </Typography>
                  ) : index === 2 ? (
                    <Typography variant="caption" sx={styles.description}>
                      Contributed to frontend development by implementing UI enhancements, fixing
                      issues, and making targeted improvements to existing features. Worked closely
                      with the team to deliver updates and maintain a consistent user experience.
                    </Typography>
                  ) : (
                    <Typography variant="caption" sx={styles.description}>
                      Played a key role in leading frontend development, taking ownership of major
                      features across the project. Designed and developed scalable, reusable, and
                      responsive UI components, integrated APIs, managed application state.
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
