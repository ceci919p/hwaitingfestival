import FavArtist from "./FavArtist.js";

export default function MyAccount({ fav }) {
  let favList = fav.map((a) => <FavArtist key={a.act} artist={a} />);
  console.log(fav);
  return (
    <main>
      <h1>Welcome to your account</h1>
      <section>{favList}</section>
    </main>
  );
}
