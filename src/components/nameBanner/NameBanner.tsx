import { myPic, resume } from '../../assets/index';
import './NameBanner.css';
import SocialLinks from './SocialLinks';

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
            I build modern, scalable, and responsive web applications using **React.js, Next.js,
            TypeScript, and modern web technologies**. I focus on creating clean, intuitive user
            experiences and delivering high-quality, maintainable solutions. Let’s collaborate to
            turn ideas into impactful digital experiences.
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
