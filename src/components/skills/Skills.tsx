import { Box, Grid, Typography } from '@mui/material';
import {
  bootstrap,
  css,
  git,
  html,
  javascript,
  mui,
  NextJs,
  react,
  redux,
  shadcn,
  tailwind,
  typescript,
} from '../../assets';
import SkillCard from './SkillCard';
import { styles } from './SkillsStyles';

interface Iprops {
  id: string;
}

const skillsData = [
  {
    id: 1,
    logo: NextJs,
    skill: 'Next JS',
    description:
      'React-based framework for building fast, scalable, Experienced in file-based routing, dynamic routes, protected routes, client components, navigation, layouts, and role-based page access using Next.js App Router, server-side rendering, and optimized performance.',
  },
  {
    id: 2,
    logo: react,
    skill: 'React JS',
    description:
      'Experienced component-based user interfaces with React.js. Proficient in hooks, state management, and optimizing performance. Skilled in creating reusable components and seamless single-page applications.',
  },
  {
    id: 3,
    logo: redux,
    skill: 'Redux Tool Kit',
    description:
      'Proficient in managing complex application state with Redux. Skilled in creating and integrating reducers, actions, and middleware for scalable, predictable state management in React applications.',
  },
  {
    id: 4,
    logo: typescript,
    skill: 'Typescript',
    description:
      'Proficient in type safety, interfaces, and advanced features for improved code quality.',
  },
  {
    id: 5,
    logo: javascript,
    skill: 'Java Script',
    description:
      'Proficient in JavaScript for creating dynamic, interactive web experiences. Skilled in ES6+, DOM manipulation, and event handling.',
  },
  {
    id: 6,
    logo: tailwind,
    skill: 'Tailwind',
    description:
      'Utility-first CSS framework used to build responsive, modern, and customizable user interfaces efficiently.',
  },
  {
    id: 7,
    logo: shadcn,
    skill: 'Shadcn',
    description:
      'Reusable, accessible, and customizable UI components built with React and Tailwind CSS for creating consistent and modern interfaces.',
  },
  {
    id: 8,
    logo: mui,
    skill: 'MUI(Material UI)',
    description:
      'Experienced in building modern, responsive UIs with Material-UI. Proficient in utilizing pre-built components, theming, and customization to create consistent and visually appealing interfaces.',
  },
  {
    id: 9,
    logo: bootstrap,
    skill: 'Bootstrap',
    description:
      'Skilled in building responsive, mobile-first websites with Bootstrap. Proficient in utilizing Bootstrap’s grid system, components, and utilities to create consistent, user-friendly designs quickly and efficiently.',
  },
  {
    id: 10,
    logo: html,
    skill: 'HTML 5',
    description:
      'Skilled in structuring content, responsive websites. Experienced with the latest HTML5 standards.',
  },
  {
    id: 11,
    logo: css,
    skill: 'CSS 3',
    description:
      'Skilled in Flexbox, Grid, responsive layouts using modern CSS. Adept at creating clean, maintainable stylesheets and enhancing user experience.',
  },
  {
    id: 12,
    skill: 'Git',
    logo: git,
    description:
      'Expert in version control using Git. Skilled in branching, merging, and resolving conflicts. Experienced in collaborating on projects using GitHub and ensuring efficient, organized code management.',
  },
];

export default function Skills({ id }: Iprops) {
  return (
    <>
      <Box sx={styles.skillsBox} id={id}>
        <Typography variant={'h3'} sx={styles.heading}>
          My Skills
        </Typography>
        <Grid container spacing={2}>
          {skillsData.map((eachSkill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index + 'skills'}>
              <SkillCard key={eachSkill.id + 'skl'} eachSkillDetails={eachSkill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
