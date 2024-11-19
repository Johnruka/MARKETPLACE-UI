import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Login", href: "#", alertMessage: "You are logging in!" },
    {
      id: 2,
      name: "Sign Up",
      href: "#",
      alertMessage: "you are signing up!", 
      
    },
    {
      id: 3,
      name: "About",
      href: "#",
      alertMessage: "Marketplace site.",
    },
  ];

  const renderNavLinks = () => {
    return navLinks.map((link) => {
      return (
        <li key={link.id} className="nav-item">
          <a
            className="nav-link"
            href={link.href}
            onClick={() => alert(link.alertMessage)}
          >
            {link.name}
          </a>
        </li>
      );
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 15px",
              fontWeight: "bold",
            }}
          >
            LEXICON
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{renderNavLinks()}</ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
