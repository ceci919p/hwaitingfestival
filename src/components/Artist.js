import { Link } from "react-router-dom";

export default function Artist(props) {
  return (
    <article className="artist-card">
      <h3 className="artist-title">{props.artist.name}</h3>
      <img
        className="artist-card-img"
        src={
          !props.artist.logo.includes("http")
            ? `https://hwaiting.herokuapp.com/${props.artist.logo}`
            : props.artist.logo
        }
        alt="artist img"
      />

      <Link
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${props.artist.name.replace(/\s+/g, "+")}`}
      >
        Read More
      </Link>
    </article>
  );
}
