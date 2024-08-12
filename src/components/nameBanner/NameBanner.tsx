import { EmailOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import { myPic } from "../../assets/index";
import { styles } from "../portfolio/Portfoliostyles";
import "./NameBanner.css";

interface Iprops {
  id: string;
}

export default function NameBanner({ id }: Iprops) {
  return (
    <div className="main-div">
      <div className="heading-div" id={id}>
        <h1 className="name">
          Hi, I'm <br />
          Naga Prasanna Darapureddy
        </h1>
        <p className="role-line">
          A Passionate <span className="role">React JS Developer</span>
        </p>
        <p className="hero-description">
          I build dynamic and responsive web applications with React,
          TypeScript, and modern web technologies. Let’s work together to create
          something amazing!
        </p>
        <div className="social-div">
          <a
            href="https://www.linkedin.com/in/prasanna-darapureddy"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-div">
              <LinkedIn sx={styles.socialIcons} />
            </div>
          </a>
          <a
            href="https://github.com/prasanna-darapureddy"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-div">
              <GitHub sx={styles.socialIcons} />
            </div>
          </a>
          <a
            href="mailto:nagaprasanna18@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-div">
              <EmailOutlined sx={styles.socialIcons} />
            </div>
          </a>
        </div>
        <a href="#contact" className="hero-cta">
          Contact
        </a>
      </div>
      <img src={myPic} alt="My Pic" className="myPic h-80" />
    </div>
  );
}
