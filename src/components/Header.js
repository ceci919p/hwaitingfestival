import { gsap } from "gsap";
import logo from "../images/logo_light.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }

  const menuRef = useRef();
  useEffect(() => {
    gsap.from(menuRef.current, { x: -1500 });
    gsap.to(menuRef.current, { duration: 1, x: 0 });
  });

  return (
    <header>
      <aside id="nav-container">
        <nav id="navigation">
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
                  Program
                </Link>
              </li>
            </ul>
          </div>
          <div id="burgermenu" onClick={ToggleBurgermenu}>
            <span id="bar1" className={menuOpen ? "active1" : null}></span>
            <span id="bar2" className={menuOpen ? "active2" : null}></span>
            <span id="bar3" className={menuOpen ? "active3" : null}></span>
          </div>
        </nav>
      </aside>
      {/*   <nav>
        <Link to="/artists">Artists</Link> | <Link to="/program">Program</Link>
      </nav> */}
      <div id="header-logo">
        <Link to="/">
          <img id="logo" src={logo} alt="" />
        </Link>
      </div>
    </header>
  );
}
