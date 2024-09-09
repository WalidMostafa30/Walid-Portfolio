import { useEffect } from "react";
import { useState } from "react";
import "./DarkMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("PortfolioDarkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  const handleDark = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("PortfolioDarkMode", JSON.stringify(darkMode));

    darkMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  }, [darkMode]);

  return (
    <div className="Nav-icon" onClick={handleDark}>
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </div>
  );
};

export default DarkMode;
