import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleArtist() {
  const { bandName } = useParams();
  const [artist, setArtist] = useState([]);
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtist() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const data = await res.json();
        setArtist(data);
      }
      getArtist();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  const originalName = bandName.replace(/\+/g, " ");
  const artistInfo = artist.filter((artist) => artist.name === originalName);
  console.log(artistInfo);
  return (
    <main>
      <h1></h1>
      <h2></h2>
      <img src="" alt="" />
      <p></p>
    </main>
  );
}
