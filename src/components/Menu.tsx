import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import { useState } from "react";
import bgNavMobile from "../assets/images/bg-pattern-mobile-nav.svg";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isMenuOpen ? "overlay" : ""}>
      <a>
        <img src={logo} alt="Logo" />
      </a>

      <button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}

        <span className="visually-hidden">Menu</span>
      </button>
      <nav
        className={
          isMenuOpen
            ? "menu-open primary-navigation desktop"
            : "primary-navigation desktop"
        }
        id="primary-navigation"
      >
        <ul className="nav-ul" aria-label="Primary" role="list">
          <li>
            <a href="">How we work</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <button className="btn-view">View plans</button>
          </li>
        </ul>

        <img src={bgNavMobile} alt="" className="bg-nav mobile" />
      </nav>
    </header>
  );
};

export default Menu;
