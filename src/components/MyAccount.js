import FavArtist from "./FavArtist.js";
import Footer from "../components/Footer";

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
        <section>
          <div>
            <h2>Favourites</h2>
            <p>
              Here you can see your list favourited artists to keep an eye on
              the artists you definietly don't want to miss!
            </p>
            <p>Go to artists</p>
            <p>Go to program</p>
          </div>
          <div></div>
        </section>
        <section id="fav-list">{favList}</section>
      </main>
      <Footer></Footer>
    </>
  );
}
