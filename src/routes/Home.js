import heroImg from "../images/splash_img.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="main-landing" style={{ backgroundImage: `url(${heroImg})` }}>
      <h1>HWAITING PROGRAM</h1>;
      {/*      <img src={heroImg} alt="BigCo Inc. logo" /> */}
      <div id="landing-buttons">
        <Link className="landing-button" to="/Artists">
          See Artists
        </Link>
        <Link className="landing-button" to="/Schedule">
          See Schedule
        </Link>
      </div>
    </main>
  );
}
