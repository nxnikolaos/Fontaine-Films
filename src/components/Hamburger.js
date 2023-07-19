import { useState } from "react";

const Hamburger = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`hamburger-menu ${clicked ? "clicked" : ""}`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <span></span>
    </div>
  );
};

export default Hamburger;
