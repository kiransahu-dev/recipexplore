import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSidebar, setShowidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog
    },
  ]

  function closeSidebar() {
    setShowidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Reci<span>x</span>Plore
        </a>
        <div className="nav-links">
          {links.map(link => (
            <Link className={location.pathname === link.path ? 'active' : ""} to={link.path} href={link.path} key={link.name}>{link.name}</Link>
          ))}
        </div>
        <div
          onClick={() => setShowidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      { showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
  );
};

export default Navbar;
