import { useEffect } from "react";
import { useState } from "react";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("walidPortfolioDarkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  const handleDark = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("walidPortfolioDarkMode", JSON.stringify(darkMode));

    !darkMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  }, [darkMode]);

  return (
    <div className="fs-2" style={{cursor:"pointer"}} onClick={handleDark}>
      {!darkMode ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default DarkMode;
