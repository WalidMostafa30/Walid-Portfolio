/* eslint-disable react/prop-types */
import "./GlobalCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalCard = ({ icon, head, info, info2 }) => {
  return (
    <div className="GlobalCard main-bg">
      <FontAwesomeIcon icon={icon} />
      <h2>{head}</h2>
      <p>{info}</p>
      <p>{info2}</p>
    </div>
  );
};

export default GlobalCard;
