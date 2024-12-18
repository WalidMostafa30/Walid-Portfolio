import FaceBookIcon from "../../assets/icons/FaceBookIcon";
import GitHubIcon from "../../assets/icons/GitHubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="SocialMedia d-flex align-items-center gap-4">
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ZbWKwL"
      >
        <FaceBookIcon />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/walid-m0stafa-">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/WalidMostafa30">
        <GitHubIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
