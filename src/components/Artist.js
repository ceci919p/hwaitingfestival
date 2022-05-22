import { Link } from "react-router-dom";

export default function Artist(props) {
  function giveColor() {
    if (props.artist.genre === "Girl group") {
      return { textShadow: " 0px 0px 10px #ff0057" };
    } else if (props.artist.genre === "Boy group") {
      return { textShadow: " 0px 0px 10px #8200ff" };
    } else if (props.artist.genre === "Soloist") {
      return { textShadow: " 0px 0px 10px #fa00ff" };
    } else if (props.artist.genre === "Co-ed") {
      return { textShadow: " 0px 0px 10px #32ff00" };
    }
  }

  return (
    <Link
      /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
      to={`/artists/${props.artist.name.replace(/\s+/g, "+")}`}
    >
      <article className="artist-card">
        <h3
          className="artist-title"
          style={
            giveColor()
            /*  props.artist.genre === "Boy group"
              ? { color: "red" }
              : { color: "blue" } */
          }
        >
          {props.artist.name}
        </h3>
        <img
          className="artist-card-img"
          src={
            !props.artist.logo.includes("http")
              ? `https://hwaiting.herokuapp.com/${props.artist.logo}`
              : props.artist.logo
          }
          alt="artist img"
        />
      </article>{" "}
    </Link>
  );
}
