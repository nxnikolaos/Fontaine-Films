import logo from "../assets/images/g6.png";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <header className="nav-header">
        <nav className="flex align-center">
          <div className="nav-logo">
            <a href="#">
              <img src={logo} alt="Logo"></img>
              Fontaine Films
            </a>
          </div>
          <Hamburger clicked={clicked} setClicked={setClicked} />
        </nav>
        {clicked ? <Menu /> : null}
      </header>
    </>
  );
};

export default Header;
