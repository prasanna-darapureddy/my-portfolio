import { Box, Typography } from "@mui/material";
import { Pie, PieChart } from "recharts";
import { styles } from "./SkillsStyles";

interface Iprops {
  id: string;
}

const skills = [
  { name: "HTML", value: 100, fill: "#dd4b25" },
  { name: "CSS", value: 100, fill: "#163ed6" },
  { name: "Javascript", value: 100, fill: "#efd81d" },
  { name: "React", value: 150, fill: "#5ed3f3" },
  { name: "Typescript", value: 90, fill: "#2f74c0" },
  { name: "Redux", value: 90, fill: "#7248b6" },
  { name: "MUI", value: 90, fill: "#007cf7" },
];

export default function Skills({ id }: Iprops) {
  let renderLabel = (entry: { name: string; value: number }) => {
    return entry.name;
  };
  return (
    <>
      <Box sx={styles.skillsBox}>
        <Typography variant={"h3"} sx={styles.heading}>
          Skills
        </Typography>
        <Box id={id}>
          <PieChart width={400} height={400}>
            <Pie
              data={skills}
              dataKey="value"
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={110}
              fill="purple"
              label={renderLabel}
              paddingAngle={5}
              nameKey="name"
              className="pie-chart"
              stroke="none"
            />
          </PieChart>
        </Box>
      </Box>
    </>
  );
}
