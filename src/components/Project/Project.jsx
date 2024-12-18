/* eslint-disable react/prop-types */
import CodeIcon from "../../assets/icons/CodeIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import "./Project.css";

const Project = ({ pro }) => {
  return (
    <div className="main-bg rounded-4">
      <div
        className="rounded-4 overflow-hidden"
        style={{ height: "200px" }}
      >
        <img
          src={pro.img}
          alt={pro.title}
          loading="lazy"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="p-2">
        <h3 className="text-white text-center my-1">{pro.title}</h3>

        <div className="d-flex align-items-center justify-content-between">
          {pro.github && (
            <a className="project__btn d-flex align-items-center gap-1 p-2 text-white fs-5" target="_blank" href={pro.github}>
              GitHub <CodeIcon />
            </a>
          )}

          <a className="project__btn d-flex align-items-center gap-1 p-2 text-white fs-5" target="_blank" href={pro.demo}>
            Demo <EyeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
