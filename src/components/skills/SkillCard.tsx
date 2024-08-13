import { Box, Typography } from "@mui/material";
import { styles } from "./SkillsStyles";

interface IProps {
  eachSkillDetails: {
    id: number;
    logo: string;
    skill: string;
    description: string;
  };
}

const SkillCard = ({ eachSkillDetails }: IProps) => {
  const {
    logo,
    skill,
    description,
  }: { logo: string; skill: string; description: string } = eachSkillDetails;
  return (
    <Box sx={styles.skillCard}>
      <Box component={"img"} src={logo} sx={styles.skillsIcon} />
      <Typography variant="h5" sx={styles.skillHeading}>
        {skill}
      </Typography>
      <Typography sx={styles.skillDescription} title={description}>
        {description.length < 100
          ? description
          : `${description.slice(0, 80)}...`}
      </Typography>
    </Box>
  );
};
export default SkillCard;
