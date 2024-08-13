import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ParticlesComponent from "../../Particles";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import NameBanner from "../nameBanner/NameBanner";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./Portfolio.css";
import { styles } from "./Portfoliostyles";

const navigation = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Skills", href: "#skills" },
  { id: 3, name: "Experience", href: "#experience" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" },
];

const Portfolio = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenus = () => (
    <>
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={handleClose}
          className="text-md font-semibold leading-6 text-white cursor-pointer hover:text-purple-600 scroll-smooth"
        >
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <>
      <ParticlesComponent id="tsParticles" />
      <header className="header shadow-2xl shadow-purple-900 ">
        <nav className="nav-menus">
          <a href="#home">
            <h2 className="portfolio-heading">Portfolio</h2>
          </a>
          <div className="menu-items-div">{renderMenus()}</div>
        </nav>
        <div className="mobile-header">
          <button onClick={handleClick} className="menu-btn">
            <MdMenu className="menu-icon" />
          </button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem sx={styles.menusBox}>{renderMenus()}</MenuItem>
          </Menu>
          <a href="#home">
            <h2 className="portfolio-heading">Portfolio</h2>
          </a>
        </div>
      </header>
      <NameBanner id={"home"} />
      <Skills id={"skills"} />
      <Experience id={"experience"} />
      <Projects id={"projects"} />
      <Contact id={"contact"} />
      <footer className="footer">        
          <div className="footer-menu-items">{renderMenus()}</div>               
      </footer>
    </>
  );
};
export default Portfolio;
