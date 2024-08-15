import { Box, Stack, Typography } from "@mui/material";
import {
  busAddType,
  busDetails,
  busDetailsAdd,
  busPassengers,
  hoardingbookingDetails,
  hoardingDashboard,
  hoardingEditor,
  hoardingMyBookings,
  hoardingTermsConditions,
} from "../../assets";
import ProjectsCard from "./ProjectsCard";
import { styles } from "./ProjectsStyles";

interface Iprops {
  id: string;
}

const projectsList = [
  {
    id: 1,
    images: [
      hoardingDashboard,
      hoardingMyBookings,
      hoardingbookingDetails,
      hoardingTermsConditions,
      hoardingEditor,
    ],
    projectTitle: "My Hoardings",
    description:
      "I played a role in developing a robust Hoardings Management System aimed at optimizing the management of outdoor advertising spaces. The system is structured around four distinct user roles—Admin, Sales, Owner, and User—each tailored with unique functionalities to improve operational workflows and enhance the overall user experience.",
    technologies: ['React JS', 'Typescript', 'MUI', 'Redux Toolkit', 'Restful API', 'Firebase', 'BitBucket'],
    teamSize: 8,
  },
  {
    id: 2,
    images: [busDetails, busDetailsAdd, busAddType, busPassengers],
    projectTitle: "Bus Booking",
    description:
      "I contributed to the development of a Bus Booking application that streamlines the process of reserving seats on buses for passengers. The application features distinct roles for Admin and Customer, each with specific functionalities to enhance operational efficiency and user experience.",
    technologies: ['React JS', 'Typescript', 'MUI', 'Redux Toolkit', 'Restful API', 'BitBucket'],
    teamSize: 8,
  },
];

export default function Projects({ id }: Iprops) {
  return (
    <Box sx={styles.projectBox} id={id}>
      <Typography variant={"h3"} sx={styles.heading}>
        Projects
      </Typography>
      <Stack direction="column" gap={5}>
        {projectsList.map((project, index) => (
          <ProjectsCard key={index+'pro'} eachProject={project} />
        ))}
      </Stack>
    </Box>
  );
}
