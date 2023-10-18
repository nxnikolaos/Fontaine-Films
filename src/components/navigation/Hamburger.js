const Hamburger = ({ clicked, setClicked }) => {
  return (
    <div
      className={`hamburger-menu${clicked ? " clicked" : ""}`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <span></span>
    </div>
  );
};

export default Hamburger;
