import { Box, Stack, Typography } from '@mui/material';
import {
  busAddType,
  busDetails,
  busDetailsAdd,
  busPassengers,
  CAEndorsment,
  CAExploreAthlete,
  CAHompage,
  CAOrders,
  CAPayment,
  CAPblcProfilePage,
  CAPlans,
  CASavedAthlete,
  CASearch,
  CASm,
  CATrainings,
  CAXPosts,
  festiveNetLogin,
  hoardingbookingDetails,
  hoardingDashboard,
  hoardingEditor,
  hoardingMyBookings,
  hoardingTermsConditions,
} from '../../assets';
import ProjectsCard from './ProjectsCard';
import { styles } from './ProjectsStyles';

interface Iprops {
  id: string;
}

const projectsList = [
  {
    id: 1,
    images: [
      CAHompage,
      CASearch,
      CAEndorsment,
      CAExploreAthlete,
      CAPlans,
      CAPayment,
      CAOrders,
      CASavedAthlete,
      CATrainings,
      CAPblcProfilePage,
      CASm,
      CAXPosts,
    ],
    projectTitle: 'Connect Athlete',
    description:
      '**Connect Athlete (CA)** is a sports platform that connects athletes, coaches, schools, colleges, and businesses. I work as a ** React.js Developer **, building responsive and user - friendly interfaces, developing reusable components, integrating APIs, and implementing features across the User and Admin platforms.',
    technologies: [
      'Next JS',
      'Typescript',
      'Shadcn',
      'Tailwind',
      'Redux Toolkit',
      'Restful API',
      'Git',
    ],
    teamSize: 5,
  },
  {
    id: 2,
    images: [festiveNetLogin],
    projectTitle: 'Festivnet',
    description:
      'Festivnet is an event management and celebration platform designed to help users discover, organize, and manage festive and special events through an engaging and responsive web experience. Worked as a Frontend Developer, developing responsive and user-friendly interfaces using React.js. Implemented event listing and detail pages, reusable UI components, API integrations, responsive layouts, form handling, and interactive features. Collaborated with the team to deliver new features, fix UI issues, and improve the overall usability and performance of the application.',
    technologies: [
      'React JS',
      'Typescript',
      'Shadcn',
      'Tailwind',
      'Redux Toolkit',
      'Restful API',
      'Git',
    ],
    teamSize: 3,
  },
  {
    id: 3,
    images: [
      hoardingDashboard,
      hoardingMyBookings,
      hoardingbookingDetails,
      hoardingTermsConditions,
      hoardingEditor,
    ],
    projectTitle: 'My Hoardings',
    description:
      'I played a role in developing a robust Hoardings Management System aimed at optimizing the management of outdoor advertising spaces. The system is structured around four distinct user roles—Admin, Sales, Owner, and User—each tailored with unique functionalities to improve operational workflows and enhance the overall user experience.',
    technologies: [
      'React JS',
      'Typescript',
      'MUI',
      'Redux Toolkit',
      'Restful API',
      'Firebase',
      'BitBucket',
    ],
    teamSize: 8,
  },
  {
    id: 4,
    images: [busDetails, busDetailsAdd, busAddType, busPassengers],
    projectTitle: 'Bus Booking',
    description:
      'I contributed to the development of a Bus Booking application that streamlines the process of reserving seats on buses for passengers. The application features distinct roles for Admin and Customer, each with specific functionalities to enhance operational efficiency and user experience.',
    technologies: ['React JS', 'Typescript', 'MUI', 'Redux Toolkit', 'Restful API', 'BitBucket'],
    teamSize: 8,
  },
];

export default function Projects({ id }: Iprops) {
  return (
    <Box sx={styles.projectBox} id={id}>
      <Typography variant={'h3'} sx={styles.heading}>
        Projects
      </Typography>
      <Stack direction="column" gap={5}>
        {projectsList.map((project, index) => (
          <ProjectsCard key={index + 'pro'} eachProject={project} />
        ))}
      </Stack>
    </Box>
  );
}
