import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SingleArtist({ artists, schedule }) {
  const { bandName } = useParams();
  //const [artist, setArtist] = useState("");

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
    memberList.push(<p key={m}>{m}</p>);
  });

  function getPrettyDay() {
    if (artistSchedule[0].day === "mon") {
      return "Monday";
    } else if (artistSchedule[0].day === "tue") {
      return "Tuesday";
    } else if (artistSchedule[0].day === "wed") {
      return "Wednesday";
    } else if (artistSchedule[0].day === "thu") {
      return "Thursday";
    } else if (artistSchedule[0].day === "fri") {
      return "Friday";
    } else if (artistSchedule[0].day === "sat") {
      return "Saturday";
    } else if (artistSchedule[0].day === "sun") {
      return "Sunday";
    }
  }

  return (
    <main>
      <header id="sv-header">
        <div
          id="sv-img"
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
      </header>

      <section id="sv-first-section">
        <div id="sv-bio">
          <h3>Bio:</h3> <p>{artistInfo[0].bio}</p>
        </div>
        <div id="sv-schedule">
          <div>
            <h3>Day:</h3> <p>{getPrettyDay()}</p>
          </div>
          <div>
            <h3>Time:</h3>{" "}
            <p>
              {artistSchedule[0].start} - {artistSchedule[0].end}
            </p>
          </div>
          <div>
            <h3>Stage:</h3> <p>{artistSchedule[0].stage}</p>
          </div>
        </div>
      </section>
      <section id="sv-second-section">
        <div>
          <img
            className="sv-info-img"
            src={
              !artistInfo[0].logo.includes("http")
                ? `https://hwaiting.herokuapp.com/${artistInfo[0].logo}`
                : artistInfo[0].logo
            }
            alt="bandimage"
          />
          <p id="sv-credits">{artistInfo[0].logoCredits}</p>
        </div>
        <div id="sv-second-box">
          <div>
            <h3>Members:</h3> <div id="sv-memberlist">{memberList}</div>
          </div>
          <div>
            <h3>Genre:</h3> <p>{artistInfo[0].genre}</p>
          </div>
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
