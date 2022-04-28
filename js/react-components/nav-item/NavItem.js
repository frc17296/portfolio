const NavItem = ({ name, scroll }) => {
  return (
    <li className="navItem">
      <a onClick={() => scroll(name.toLowerCase())} className="navLink">
        {name}
      </a>
    </li>
  );
};
