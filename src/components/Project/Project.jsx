/* eslint-disable react/prop-types */
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import "./Project.css";

const Project = ({ pro }) => {
  return (
    <div className="Project main-bg rounded-3">
      <div
        className="Project__img rounded-2"
        style={{ backgroundImage: `url(${pro.img})` }}
      />

      <div className="Project__details p-2">
        <h3 className="Project__title">{pro.title}</h3>

        <div className="Project__btns">
          {pro.github && (
            <a target="_blank" href={pro.github}>
              GitHub <CodeIcon />
            </a>
          )}

          <a target="_blank" href={pro.demo}>
            Demo <EyeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
