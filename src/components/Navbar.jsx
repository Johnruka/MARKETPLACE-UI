import React from "react";
import logo from "../assets/Lexicon.svg";
import styles from "../components/styles/Navbar.module.css";

const Navbar = () => {
  const navbarLinks = [
    { id: 1, name: "Login", href: "#" },
    { id: 2, name: "Sign Up", href: "#" },
    { id: 3, name: "About", href: "#" },
  ];

  const renderNavbarLinks = () => {
    const listItems = navbarLinks.map((link) => {
      const liElement = (
        <li className="nav-item" id={link.id}>
          <a className="nav-link" href={link.href}>
            {link.name}
          </a>
        </li>
      );
      return liElement;
    });

    return listItems;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#" >
    <img src={logo} alt="Lexicon" id={styles.navbarLogo} />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        {renderNavbarLinks()}
    </ul>
  </div>
</nav>
  );
};

export default Navbar;