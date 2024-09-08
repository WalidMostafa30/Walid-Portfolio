import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("PortfolioDarkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  const handleDark = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("PortfolioDarkMode", JSON.stringify(darkMode));

    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="Nav-icon" onClick={handleDark}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </div>
  );
};

export default DarkMode;
