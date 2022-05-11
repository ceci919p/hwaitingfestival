import Artist from "./Artist";

export default function ArtistList({ artists }) {
  console.log(artists);
  return (
    <section id="Artistlist">
      {artists.map((a) => (
        <Artist key={a.name} artist={a} />
      ))}
    </section>
  );
}
