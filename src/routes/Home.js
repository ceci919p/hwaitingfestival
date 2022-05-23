import heroImg from "../images/splash_img.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main id="main-landing" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1>HWAITING PROGRAM</h1>;
        {/*      <img src={heroImg} alt="BigCo Inc. logo" /> */}
        <div id="landing-buttons">
          <Link id="artist-button" className="landing-button" to="/artists">
            See Artists
          </Link>
          <Link id="program-button" className="landing-button" to="/program">
            See Program
          </Link>
        </div>
      </main>
    </>
  );
}
