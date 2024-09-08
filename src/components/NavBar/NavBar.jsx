import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./NavBar.css";
import SmallNav from "../SmallNav/SmallNav";
import { navLinks } from "../../assets/data/Data";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__container container p-2">
        <div className="NavBar__links d-none d-xl-flex main-bg">
          {navLinks.map((item) => {
            return (
              <NavLink key={item.name} className="NavBar__link" to={item.link}>
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <SmallNav />

        <DarkMode />
      </div>
    </div>
  );
};

export default NavBar;
