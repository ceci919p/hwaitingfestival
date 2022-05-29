import faved from "../images/faved.svg";

export default function FavArtist({ artist }) {
  //console.log(props.artist);
  function getFavDay() {
    if (artist.day === "mon") {
      return "Monday";
    } else if (artist.day === "tue") {
      return "Tuesday";
    } else if (artist.day === "wed") {
      return "Wednesday";
    } else if (artist.day === "thu") {
      return "Thursday";
    } else if (artist.day === "fri") {
      return "Friday";
    } else if (artist.day === "sat") {
      return "Saturday";
    } else if (artist.day === "sun") {
      return "Sunday";
    }
  }

  return (
    <article className="fav-card">
      <h2>{artist.act}</h2>
      <hr></hr>
      <h3>{getFavDay()}</h3>
      <p>
        {artist.start} - {artist.end} | {artist.stage}
      </p>
      <img id="favlist-heart-icon" src={faved} alt="faved-icon"></img>
    </article>
  );
}
