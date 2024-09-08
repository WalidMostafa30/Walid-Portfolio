/* eslint-disable react/prop-types */
import "./GlobalTitle.css";

export default function GlobalTitle({ title, description }) {
  return (
    <div className="GlobalTitle text-center mb-3 mb-sm-5">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
