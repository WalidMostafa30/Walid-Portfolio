import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="SocialMedia d-flex align-items-center gap-4">
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ZbWKwL"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/walid-m0stafa-">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target="_blank" href="https://github.com/WalidMostafa30">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialMedia;
