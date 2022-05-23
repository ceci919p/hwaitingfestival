import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SingleArtist({ artists, schedule }) {
  const { bandName } = useParams();
  //const [artist, setArtist] = useState("");

  function showCredits() {}

  /*   useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtist() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const data = await res.json();
        console.log(data);
        setArtist(data);
      }
      getArtist();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  ); */

  let memberList = [];
  const originalName = bandName.replace(/\+/g, " ");
  //let { name, members, genre, logoCredits, logo, bio   = artistInfo[0];}
  let artistSchedule = schedule.filter((a) => a.act === originalName);
  let artistInfo = artists.filter((artist) => artist.name === originalName);
  //console.log(artistSchedule);

  artistInfo[0].members.forEach((m) => {
    memberList.push(<h3 key={m}>{m}</h3>);
  });

  return (
    <main>
      <header id="sv-header">
        <div
          id="sv-img"
          onMouseOver={showCredits()}
          style={{
            backgroundImage: `url(${
              !artistInfo[0].logo.includes("http")
                ? `https://hwaiting.herokuapp.com/${artistInfo[0].logo}`
                : artistInfo[0].logo
            })`,
          }}
        >
          {" "}
        </div>
        <h1 id="sv-h1">{artistInfo[0].name}</h1>
        <p id="sv-credits">{artistInfo[0].logoCredits}</p>
      </header>

      <section id="sv-first-section">
        <div id="sv-schedule">
          <h3>Day:</h3> <p>{artistSchedule[0].day}</p>
          <h3>Time:</h3>{" "}
          <p>
            {artistSchedule[0].start} - {artistSchedule[0].end}
          </p>
          <h3>Stage:</h3> <p>{artistSchedule[0].stage}</p>
        </div>
      </section>
      {/*  <h3>Members: </h3>
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
      {artist !== "" ? <p>{artistInfo[0].bio}</p> : null} */}
    </main>
  );
}
