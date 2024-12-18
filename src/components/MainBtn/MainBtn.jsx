/* eslint-disable react/prop-types */
import "./MainBtn.css";

const MainBtn = ({ children, active }) => {
  return <button className={`MainBtn ${active ? "active" : ""}`}>{children}</button>;
};

export default MainBtn;
