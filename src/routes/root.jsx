import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Root() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState();

  function switchMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth > 767 ? setIsDesktop(true) : setIsDesktop(false);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      window.innerWidth > 767 ? setIsDesktop(true) : setIsDesktop(false);
    });
  }

  return (
    <>
      <header className="header_area">
        <div className="nav_bar">
          {!isDesktop && (
            <div className="mobile_menu">
              <div className="logo">
                <img className="max-w-[170px]" src={logo} alt="logo" />
              </div>
              <div className="menu_switch">
                <span onClick={switchMenu}>{showMenu ? <CgClose /> : <GrMenu />}</span>
              </div>
            </div>
          )}

          <div className="header_section">
            <div className={`nav_container ${showMenu ? "menu_active" : null}`}>
              <div className="logo">
                <img className="max-w-[170px]" src={logo} alt="logo" />
              </div>
              <ul className="menu_items">
                <li>
                  <Link to="/" onClick={switchMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active-class" : "no-active-class")}
                    onClick={switchMenu}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/why"
                    className={({ isActive }) => (isActive ? "active-class" : "no-active-class")}
                    onClick={switchMenu}
                  >
                    Why
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/price"
                    className={({ isActive }) => (isActive ? "active-class" : "no-active-class")}
                    onClick={switchMenu}
                  >
                    Price
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active-class" : "no-active-class")}
                    onClick={switchMenu}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "active-class" : "no-active-class")}
                    onClick={switchMenu}
                  >
                    Log in
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
