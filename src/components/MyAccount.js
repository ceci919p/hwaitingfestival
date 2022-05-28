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
        <section>{favList}</section>
      </main>
      <Footer></Footer>
    </>
  );
}
