import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./NavBar.css";
import HomeIcon from "../../assets/icons/HomeIcon";
import PersonIcon from "../../assets/icons/PersonIcon";
import SkillsIcon from "../../assets/icons/SkillsIcon";
import ProjectsIcon from "../../assets/icons/ProjectsIcon";
import PaperPlaneIcon from "../../assets/icons/PaperPlaneIcon";

const NavBar = () => {
  const navLinks = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "About", link: "/about", icon: <PersonIcon /> },
    { name: "Skills", link: "/skills", icon: <SkillsIcon /> },
    { name: "Projects", link: "/projects", icon: <ProjectsIcon /> },
    { name: "Contact", link: "/contact", icon: <PaperPlaneIcon /> },
  ];

  // circle nav code ....
  const [circlePosition, setCirclePosition] = useState(0);
  const navContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const activeLink = navContainerRef.current.querySelector(
      ".NavBar__link.active"
    );
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const containerRect = navContainerRef.current.getBoundingClientRect();
      setCirclePosition(
        linkRect.left - containerRect.left + linkRect.width / 2 - 30
      ); 
    }
  }, [location]);

  return (
    <div className="NavBar z-3 mt-2 p-2 pt-3">
      <div className="NavBar__links d-flex align-items-center rounded-5 m-auto p-1 position-relative main-bg" ref={navContainerRef}>
        {navLinks.map((item) => (
          <NavLink key={item.name} className="NavBar__link text-white flex-grow-1 text-center py-2 position-relative" to={item.link}>
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </NavLink>
        ))}
        <div className="nav-circle" style={{ left: `${circlePosition}px` }} />
      </div>
    </div>
  );
};

export default NavBar;
