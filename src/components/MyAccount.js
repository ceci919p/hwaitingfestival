import { Link } from "react-router-dom";
import FavArtist from "./FavArtist.js";
import Footer from "../components/Footer";
import heartImg from "../images/heart.svg";

export default function MyAccount({ fav }) {
  let favList = fav.map((a) => <FavArtist key={a.act} artist={a} />);
  console.log(fav);

  return (
    <>
      {" "}
      <header id="account-header">
        <h1>Profile</h1>
      </header>
      <main>
        <section id="account-info">
          <div id="account-info-left">
            <h2>Favourites</h2>
            <p>
              Here you can see your list of favourited artists to keep an eye on
              the artists you definietly don't want to miss!
            </p>
            <div id="account-fav-links">
              <Link id="fav-artist-link" to="/artists">
                Go to artists 🠮
              </Link>
              <Link to="/program">Go to program 🠮</Link>
            </div>
          </div>
          <div>
            <img id="account-img" src={heartImg} alt="heart" />
          </div>
        </section>
        <section id="fav-list">{favList}</section>
      </main>
      <Footer></Footer>
    </>
  );
}
