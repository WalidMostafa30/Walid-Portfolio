/* eslint-disable react/prop-types */
import "./Project.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ pro }) => {
  return (
    <div className="Project main-bg rounded-3">
      <div className="Project__img rounded-2 overflow-hidden">
        <img src={pro.img} alt={pro.title} />
      </div>

      <div className="Project__details p-2">
        <h3 className="Project__title">{pro.title}</h3>

        <div className="Project__btns">
          <a target="_blank" href={pro.github}>
            GitHub
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a target="_blank" href={pro.demo}>
            Demo
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
