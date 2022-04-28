class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navItems = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setMenuOpen = this.setMenuOpen.bind(this);
    this.scroll = this.scroll.bind(this);
    this.state = {
      isMenuOpen: false,
    };
  }

  setMenuOpen(value) {
    this.setState({
      isMenuOpen: value,
    });
  }

  toggleMenu() {
    this.setMenuOpen(!this.state.isMenuOpen);
  }

  scroll(elementName) {
    scrollToElement(elementName);
    this.setMenuOpen(false);
  }

  componentDidUpdate() {
    if (this.state.isMenuOpen) {
      this.navItems.current.classList.add("toggle-menu");
    } else {
      this.navItems.current.classList.remove("toggle-menu");
    }
  }

  render() {
    return (
      <nav
        className="navbar"
        style={{
          backgroundColor: this.state.isMenuOpen ? "var(--menu-bkgrd)" : "",
        }}
      >
        <div className="logo">
          <a className="navLink" onClick={() => scrollToElement()}>
            Home
          </a>
        </div>
        <ul ref={this.navItems} className="navItems">
          <NavItem name={"About"} scroll={this.scroll} />
          <NavItem name={"Projects"} scroll={this.scroll} />
          <NavItem name={"Contacts"} scroll={this.scroll} />
        </ul>
        <Hamburger
          toggleMenu={this.toggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
      </nav>
    );
  }
}

const navbar = ReactDOM.createRoot(document.querySelector("#navbar"));
navbar.render(React.createElement(Navbar));
