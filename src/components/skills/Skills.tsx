import { Box, Grid, Typography } from "@mui/material";
import {
  bootstrap,
  css,
  git,
  html,
  javascript,
  mui,
  react,
  redux,
  typescript,
} from "../../assets";
import SkillCard from "./SkillCard";
import { styles } from "./SkillsStyles";

interface Iprops {
  id: string;
}

const skillsData = [
  {
    id: 1,
    logo: html,
    skill: "HTML 5",
    description:
      "Skilled in structuring content, responsive websites. Experienced with the latest HTML5 standards.",
  },
  {
    id: 2,
    logo: css,
    skill: "CSS 3",
    description:
      "Skilled in Flexbox, Grid, responsive layouts using modern CSS. Adept at creating clean, maintainable stylesheets and enhancing user experience.",
  },
  {
    id: 3,
    logo: javascript,
    skill: "Java Script",
    description:
      "Proficient in JavaScript for creating dynamic, interactive web experiences. Skilled in ES6+, DOM manipulation, and event handling.",
  },
  {
    id: 4,
    logo: react,
    skill: "React JS",
    description:
      "Experienced component-based user interfaces with React.js. Proficient in hooks, state management, and optimizing performance. Skilled in creating reusable components and seamless single-page applications.",
  },
  {
    id: 5,
    logo: typescript,
    skill: "Typescript",
    description:
      "Proficient in type safety, interfaces, and advanced features for improved code quality.",
  },
  {
    id: 6,
    logo: redux,
    skill: "Redux",
    description:
      "Proficient in managing complex application state with Redux. Skilled in creating and integrating reducers, actions, and middleware for scalable, predictable state management in React applications.",
  },
  {
    id: 7,
    logo: mui,
    skill: "MUI(Material UI)",
    description:
      "Experienced in building modern, responsive UIs with Material-UI. Proficient in utilizing pre-built components, theming, and customization to create consistent and visually appealing interfaces.",
  },
  {
    id: 8,
    logo: bootstrap,
    skill: "Bootstrap",
    description:
      "Skilled in building responsive, mobile-first websites with Bootstrap. Proficient in utilizing Bootstrap’s grid system, components, and utilities to create consistent, user-friendly designs quickly and efficiently.",
  },
  {
    id: 9,
    skill: "Git",
    logo: git,
    description:
      "Expert in version control using Git. Skilled in branching, merging, and resolving conflicts. Experienced in collaborating on projects using GitHub and ensuring efficient, organized code management.",
  },
];

export default function Skills({ id }: Iprops) {
  return (
    <>
      <Box sx={styles.skillsBox} id={id}>
        <Typography variant={"h3"} sx={styles.heading}>
          My Skills
        </Typography>
        <Grid container spacing={2}>
          {skillsData.map((eachSkill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index + "skills"}>
              <SkillCard
                key={eachSkill.id + "skl"}
                eachSkillDetails={eachSkill}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
