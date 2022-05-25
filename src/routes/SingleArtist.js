import { useParams } from "react-router-dom";
import unactiveFav from "../images/unactive-fav.svg";
import activeFav from "../images/active-fav.svg";
//import { useState } from "react";

export default function SingleArtist({
  artists,
  schedule,
  isLoggedIn,
  setFav,
}) {
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
  if (artistInfo.length === 0) {
    return (
      <div className="sv-heart-ld">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }

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

  function getTextColor() {
    if (artistInfo[0].genre === "Girl group") {
      return { textShadow: " 0px 0px 10px #ff0057" };
    } else if (artistInfo[0].genre === "Boy group") {
      return { textShadow: " 0px 0px 10px #8200ff" };
    } else if (artistInfo[0].genre === "Soloist") {
      return { textShadow: " 0px 0px 10px #fa00ff" };
    } else if (artistInfo[0].genre === "Co-ed") {
      return { textShadow: " 0px 0px 10px #32ff00" };
    }
  }

  function getBgFilter() {
    //filter:"grayscale(100%) brightness(50%) saturate(500%) contrast(0.8)",
    if (artistInfo[0].genre === "Girl group") {
      return "grayscale(100%) brightness(12%) sepia(100%) hue-rotate(-80deg) saturate(500%)";
    } else if (artistInfo[0].genre === "Boy group") {
      return "grayscale(100%) brightness(12%) sepia(100%) hue-rotate(-140deg) saturate(500%)";
    } else if (artistInfo[0].genre === "Soloist") {
      return "grayscale(100%) brightness(12%) sepia(100%) hue-rotate(-110deg) saturate(500%)";
    } else if (artistInfo[0].genre === "Co-ed") {
      return "grayscale(100%) brightness(12%) sepia(100%) hue-rotate(80deg) saturate(500%)";
    }
  }

  function getBorderColor() {
    if (artistInfo[0].genre === "Girl group") {
      return "#ff0057";
    } else if (artistInfo[0].genre === "Boy group") {
      return "#8200ff";
    } else if (artistInfo[0].genre === "Soloist") {
      return "#fa00ff";
    } else if (artistInfo[0].genre === "Co-ed") {
      return "#32ff00";
    }
  }

  function getBoxShadow() {
    if (artistInfo[0].genre === "Girl group") {
      return "0px 0px 6px 2px #ff6497";
    } else if (artistInfo[0].genre === "Boy group") {
      return "0px 0px 6px 2px #aa53ff";
    } else if (artistInfo[0].genre === "Soloist") {
      return "0px 0px 6px 2px #fc61ff";
    } else if (artistInfo[0].genre === "Co-ed") {
      return "0px 0px 6px 2px #88ff6b";
    }
  }
  function addToFav() {
    console.log("Hello");
    setFav((old) => [...old, { ...artistSchedule[0] }]);
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
            filter: getBgFilter(),
          }}
        >
          {" "}
        </div>
        <h1 style={getTextColor()} id="sv-h1">
          {artistInfo[0].name}
        </h1>
      </header>

      <section id="sv-first-section">
        <div id="sv-bio">
          <h3>Bio:</h3> <p>{artistInfo[0].bio}</p>
        </div>
        <div id="fav-schedule-wrapper">
          <button
            onClick={isLoggedIn ? addToFav : undefined}
            id="fav-button"
            className={isLoggedIn ? "active-fav" : "unactive-fav"}
          >
            <img
              id="fav-icon"
              src={isLoggedIn ? activeFav : unactiveFav}
              alt="favourite-icon"
            />
            {isLoggedIn ? "Add to schedule" : "Login to favourite"}
          </button>
          <div
            id="sv-schedule"
            style={{ borderColor: getBorderColor(), boxShadow: getBoxShadow() }}
          >
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
        <div
          id="sv-second-box"
          style={{ borderColor: getBorderColor(), boxShadow: getBoxShadow() }}
        >
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
