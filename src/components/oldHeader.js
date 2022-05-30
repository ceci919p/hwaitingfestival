import { gsap } from "gsap";
import logo from "../images/logo_light.svg";
import profileLogo from "../images/profile.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header({ isLoggedIn, setIsLoggedIn, setFav }) {
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
    setFav([]);
    toggleProfilemenu();
  }

  return (
    <header id="nav-container">
      <nav id="navigation">
        <aside id="nav-menu">
          <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
            <ul>
              <li></li>

              <li> </li>
              <li> </li>
            </ul>
          </div>
          <div id="burgermenu" onClick={ToggleBurgermenu}>
            <span id="bar1" className={menuOpen ? "active1" : null}></span>
            <span id="bar2" className={menuOpen ? "active2" : null}></span>
            <span id="bar3" className={menuOpen ? "active3" : null}></span>
          </div>
        </aside>
      </nav>
    </header>
  );
}
