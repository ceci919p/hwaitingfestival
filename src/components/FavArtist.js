export default function FavArtist({ artist }) {
  //console.log(props.artist);

  return (
    <article>
      <h3>{artist.act}</h3>
      <p>Day: {artist.day}</p>
      <p>Stage: {artist.stage}</p>
      <p>
        Time: {artist.start} - {artist.end}
      </p>
    </article>
  );
}
