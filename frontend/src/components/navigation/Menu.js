import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
