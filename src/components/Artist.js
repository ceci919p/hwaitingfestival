//import { Link } from "react-router-dom";

export default function Artist(props) {
  return (
    <article className="Artist">
      <h2>{props.artist.name}</h2>

      {/*    <Link to={`/artists/${props.product.name}`}>Read More</Link>  */}
    </article>
  );
}
