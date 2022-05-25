import { gsap } from "gsap";
import logo from "../images/logo_light.svg";
import profileLogo from "../images/profile.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }

  const menuRef = useRef();
  useEffect(() => {
    gsap.from(menuRef.current, { x: -1500 });
    gsap.to(menuRef.current, { duration: 1, x: 0 });
  });

  const [profileOpen, setProfileOpen] = useState(false);

  function toggleProfilemenu() {
    setProfileOpen((old) => !old);
  }

  function logOut() {
    setIsLoggedIn(false);
    toggleProfilemenu();
  }

  /*   const profileRef = useRef();
  useEffect(() => {
    gsap.from(profileRef.current, { autoAlpha: 0 });
    gsap.to(profileRef.current, { duration: 0.2, autoAlpha: 1 });
  }); */

  return (
    <header id="nav-container">
      <nav id="navigation">
        <aside id="nav-menu">
          <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
            <ul>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/"
                  onClick={ToggleBurgermenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/artists"
                  onClick={ToggleBurgermenu}
                >
                  See Artists
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  id="header_link"
                  className="nav-link"
                  onClick={ToggleBurgermenu}
                  to="/program"
                >
                  See Program
                </Link>
              </li>
            </ul>
          </div>
          <div id="burgermenu" onClick={ToggleBurgermenu}>
            <span id="bar1" className={menuOpen ? "active1" : null}></span>
            <span id="bar2" className={menuOpen ? "active2" : null}></span>
            <span id="bar3" className={menuOpen ? "active3" : null}></span>
          </div>
        </aside>
        <div>
          <Link id="home-logo-container" to="/">
            <img
              id="home-logo"
              className="header-logos"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div onClick={toggleProfilemenu} id="profile-logo-container">
          <img
            className={profileOpen ? "open-profile" : null}
            id="profile-logo"
            src={profileLogo}
            alt=""
          />
        </div>
        <div
          id="profile-menu"
          //ref={profileRef}
          className={profileOpen ? null : "inactive"}
        >
          {isLoggedIn ? (
            <>
              <p>You are currently logged in</p>
              <Link id="logout-button" onClick={logOut} to="/">
                Logout
              </Link>
            </>
          ) : (
            <>
              {" "}
              <p>
                You are currently <b>not</b> logged in
              </p>
              <Link id="login-button" onClick={toggleProfilemenu} to="/account">
                Log in
              </Link>{" "}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
