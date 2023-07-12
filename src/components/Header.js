import logo from "../assets/images/g6.png";

const Header = () => {
  return (
    <header className="nav-header">
      <nav>
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="Logo"></img>
            Fontaine Films
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
