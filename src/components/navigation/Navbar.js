import logo from "../../assets/images/g6.png";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <header className="nav-header">
        <nav className="flex align-center">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={logo} alt="Logo"></img>
              Fontaine Filmsr
            </Link>
          </div>
          <Searchbar />
          <Hamburger clicked={clicked} setClicked={setClicked} />
        </nav>
        {clicked ? <Menu /> : null}
      </header>
    </>
  );
};

export default Navbar;
