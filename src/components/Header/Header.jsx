import DarkMode from "../DarkMode/DarkMode";
import "./Header.css";

const Header = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between py-1">
      <h1 className="name">
        Walid <span>🖐</span>
      </h1>

      <DarkMode />
    </div>
  );
};

export default Header;
