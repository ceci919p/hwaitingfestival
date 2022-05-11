//import { Link } from "react-router-dom";

export default function Artist(props) {
  /*   function getImg() {
    const herokuAPI = "https://hwaiting.herokuapp.com/logos/";
    let bandImg = props.artist.logo;
    console.log("bandimg", bandImg);
    let logoUrl;

    if (props.artist.logo.includes("https")) {
      return props.artist.logo;
    } else {
      logoUrl = herokuAPI.concat(bandImg);

      return logoUrl;
    }
  } */

  return (
    <article className="artist-card">
      <h3 className="artist-title">{props.artist.name}</h3>
      <img
        className="artist-card-img"
        src={
          !props.artist.logo.includes("http")
            ? `https://hwaiting.herokuapp.com/logos/${props.artist.logo}`
            : props.artist.logo
        }
        alt="artist img"
      />

      {/*    <Link to={`/artists/${props.product.name}`}>Read More</Link>  */}
    </article>
  );
}
