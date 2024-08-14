import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { projectsDummy } from "../../assets";
import { styles } from "./ProjectsStyles";

type Project = {
  id: number;
  images: string[];
  projectTitle: string;
  description: string;
  technologies: string[];
  teamSize: number;
};

interface IProps {
  eachProject: Project;
}

export default function ProjectsCard({ eachProject }: IProps) {
  const { id, images, projectTitle, description, technologies, teamSize } =
    eachProject as Project;
  const settings = {
    dots: false,
    infinite: images.length > 0 ? true : false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <Box
      sx={styles.projectCard}
      flexDirection={
        id === 1
          ? { xs: "column", sm: "row-reverse" }
          : { xs: "column", sm: "row" }
      }
    >
      <Box sx={styles.imagesBox}>
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <Box key={index}>
              <Box
                component={"img"}
                alt="Screen"
                src={imageUrl}
                sx={styles.image}
                loading="lazy"
                onError={(event) =>
                  (event.currentTarget.src = `${projectsDummy}`)
                }
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box sx={styles.projectDescription}>
        <Typography variant="h5">{projectTitle}</Typography>
        <Stack direction={'column'} gap={1}>
          <Typography sx={styles.descriptionText}>{description}</Typography>
          <Typography sx={styles.descriptionText}>
            Technologies Used: {technologies.join(", ")}
          </Typography>
          <Typography sx={styles.descriptionText}>
            Team Size: {teamSize}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
