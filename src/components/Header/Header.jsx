import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between py-1">
      <h1 className="d-flex align-items-center gap-1">
        Walid 
      </h1>

      <DarkMode />
    </div>
  );
};

export default Header;
