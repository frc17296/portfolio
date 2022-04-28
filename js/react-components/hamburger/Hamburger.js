function Hamburger({ toggleMenu, isMenuOpen }) {
  return (
    <button
      className={`hamburger hamburger--collapse ${
        isMenuOpen ? "is-active" : ""
      }`}
      onClick={() => toggleMenu()}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
