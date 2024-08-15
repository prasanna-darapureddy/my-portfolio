import { myPic, resume } from "../../assets/index";
import "./NameBanner.css";
import SocialLinks from "./SocialLinks";

interface Iprops {
  id: string;
}

export default function NameBanner({ id }: Iprops) {
  return (
    <div id={id}>
      <div className="main-div">
        <div className="intro-div">
          <h1 className="name">
            Hi, I'm <br />
            Naga Prasanna Darapureddy
          </h1>
          <p className="role-line">
            A Passionate <span className="role">React JS Developer</span>
          </p>
          <p className="hero-description">
            I build dynamic and responsive web applications with React,
            TypeScript, and modern web technologies. Let’s work together to
            create something amazing!
          </p>
          <SocialLinks />
          <a href={resume} className="hero-cta" download={resume}>
            Resume
          </a>
        </div>
        <img src={myPic} alt="My Pic" className="myPic h-80" />
      </div>
    </div>
  );
}
