import { Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ParticlesComponent from "../../Particles";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import NameBanner from "../nameBanner/NameBanner";
import SocialLinks from "../nameBanner/SocialLinks";
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

  const handleMenuClick = (event: any) => {
    let active = document.querySelector(".menu.active");
    if (active) active.classList.remove("active");
    if (event.target.classList.contains("menu")) {
      event.target.classList.add("active");
      window.location.href = `#${event.target.id}`;
    }
    handleClose();
  };


  const renderMenus = () => (
    <>
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={handleMenuClick}
          id={`${item}1`}
          className={item.name === "Home" ? "active menu" : "menu"}
        >
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <>
      <div className="app">
        <ParticlesComponent id="tsParticles" />
        <div className="mobile-header shadow-2xl shadow-purple-900">
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
        <header className="header shadow-2xl shadow-purple-900 ">
          <a href="#home" className="web-portfolio-heading">
            <h2 className="portfolio-heading">Portfolio</h2>
          </a>
          <nav className="nav-menus">{renderMenus()}</nav>
        </header>
        <Stack direction={"column"} gap={3}>
          <NameBanner id={"home"} />
          <Skills id={"skills"} />
          <Experience id={"experience"} />
          <Projects id={"projects"} />
          <Contact id={"contact"} />
        </Stack>
        <footer className="footer">
          <div className="footer-menu-items">{renderMenus()}</div>
          <SocialLinks />
        </footer>
      </div>
    </>
  );
};
export default Portfolio;
