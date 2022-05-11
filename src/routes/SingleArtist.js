import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleArtist() {
  const { bandName } = useParams();
  const [artist, setArtist] = useState("");
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

  let artistInfo;
  let memberList = [];
  const originalName = bandName.replace(/\+/g, " ");
  //let { name, members, genre, logoCredits, logo, bio   = artistInfo[0];}

  if (artist !== "") {
    artistInfo = artist.filter((artist) => artist.name === originalName);
    console.log(artistInfo[0]);
    artistInfo[0].members.forEach((m) => {
      memberList.push(<h3 key={m}>{m}</h3>);
    });
  }

  return (
    <main>
      {artist !== "" ? <h1>{artistInfo[0].name}</h1> : null}

      <h3>Members: </h3>
      {artist !== "" ? <div> {memberList}</div> : null}

      {artist !== "" ? (
        <img
          className="artist-info-img"
          src={
            !artistInfo[0].logo.includes("http")
              ? `https://hwaiting.herokuapp.com/logos/${artistInfo[0].logo}`
              : artistInfo[0].logo
          }
          alt="bandimage"
        />
      ) : null}
      {artist !== "" ? <p>{artistInfo[0].logoCredits}</p> : null}
      {artist !== "" ? <h3>{artistInfo[0].genre}</h3> : null}
      {artist !== "" ? <p>{artistInfo[0].bio}</p> : null}
    </main>
  );
}
