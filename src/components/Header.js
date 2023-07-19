import logo from "../assets/images/g6.png";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="nav-header">
      <nav className="flex align-center">
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="Logo"></img>
            Fontaine Films
          </a>
        </div>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
