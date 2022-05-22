import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleviewMain from "../components/SingleviewMain";

export default function SingleArtist() {
  const { bandName } = useParams();
  const [artist, setArtist] = useState([]);
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtist() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const artistData = await res.json();

        const originalName = bandName.replace(/\+/g, " ");

        let artistInfo = artistData.filter(
          (artist) => artist.name === originalName
        );

        setArtist(artistInfo);
      }
      getArtist();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  //  const originalName = bandName.replace(/\+/g, " ");
  //let { name, members, genre, logoCredits, logo, bio   = artistInfo[0];}
  /*   let memberList = [];
  if (artist !== "") {
 
    //console.log(artistInfo[0]);
    artistInfo[0].members.forEach((m) => {
      memberList.push(<h3 key={m}>{m}</h3>);
    });
  }
 */
  //console.log(artist);
  return <SingleviewMain artist={artist}></SingleviewMain>;

  /*  style={{
            backgroundImage: `url(${
              !artist[0].logo.includes("http")
                ? `https://hwaiting.herokuapp.com/${artist.logo}`
                : artist.logo
            })`,
          }} */

  {
    /*   <h1>{artist[0].name}</h1> */
  }
  {
    /*       <img
            className="artist-card-img"
            src={
              !props.artist.logo.includes("http")
                ? `https://hwaiting.herokuapp.com/${props.artist.logo}`
                : props.artist.logo
            }
            alt="artist img"
          /> */
  }

  /*     <main>
     <h1>{artistInfo[0].name}</h1> 

      <h3>Members: </h3>
      {artist !== "" ? <div> {memberList}</div> : null}

      {artist !== "" ? (
        <img
          className="artist-info-img"
          src={
            !artistInfo[0].logo.includes("http")
              ? `https://hwaiting.herokuapp.com/${artistInfo[0].logo}`
              : artistInfo[0].logo
          }
          alt="bandimage"
        />
      ) : null}
      {artist !== "" ? <p>{artistInfo[0].logoCredits}</p> : null}
      {artist !== "" ? <h3>{artistInfo[0].genre}</h3> : null}
      {artist !== "" ? <p>{artistInfo[0].bio}</p> : null}
    </main> */
}
