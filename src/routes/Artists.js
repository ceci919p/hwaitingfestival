import { useState, useEffect } from "react";
import ArtistList from "../components/ArtistList";

/* function makeList(artists, schedule) {
//console.log("artists:", artists)
//console.log("schedule:", schedule)
return artists.map((a) => {
  //const [name, members, genre, logoCredits, logo, bio] = artists;
  a.day = a.name;
  return a;
});

} */

function Artists() {
  const [artists, setArtists] = useState([]);
  const [schedule, setSchedule] = useState([]);
  //const [fullArtistList, setFullArtistList] = useState(makeList(artists, schedule))
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtists() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const data = await res.json();
        setArtists(data);
      }
      getArtists();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getSchedule() {
        const resS = await fetch("https://hwaiting.herokuapp.com/schedule");
        const scheduleData = await resS.json();
        setSchedule(scheduleData);
      }
      getSchedule();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );


let mon = [];
let tue = [];
let wed = [];
let thu = [];
let fri = [];
let sat = [];
let sun = [];

//schedule.Midgard.mon.map;
//schedule.Vanaheim.mon.map;
//schedule.Jotunheim.mon.map;

//schedule.Midgard.tue.map;
//schedule.Vanaheim.tue.map;
//schedule.Jotunheim.tue.map;

 /*  let fullArtistList = artists.map((a) => { MON.INCLUDES(a.name)
    if(schedule.Midgard.mon.act.includes(a.name) || schedule.Vanaheim.mon.act.includes(a.name) || schedule.Jotunheim.mon.act.includes(a.name)) {
      return a.day = "Monday"
    } else if (schedule.Midgard.tue.act.includes(a.name) || schedule.Vanaheim.tue.act.includes(a.name) || schedule.Jotunheim.tue.act.includes(a.name)) {
      return a.day = "Tuesday"
    } else if (schedule.Midgard.wed.act.includes(a.name) || schedule.Vanaheim.wed.act.includes(a.name) || schedule.Jotunheim.wed.act.includes(a.name)) {
      return a.day = "Wednesday"
    } else if (schedule.Midgard.thu.act.includes(a.name) || schedule.Vanaheim.thu.act.includes(a.name) || schedule.Jotunheim.thu.act.includes(a.name)) {
      return a.day = "Thursday"
    } else if (schedule.Midgard.fri.act.includes(a.name) || schedule.Vanaheim.fri.act.includes(a.name) || schedule.Jotunheim.fri.act.includes(a.name)) {
     return  a.day = "Friday"
    } else if (schedule.Midgard.sat.act.includes(a.name) || schedule.Vanaheim.sat.act.includes(a.name) || schedule.Jotunheim.sat.act.includes(a.name)) {
     return  a.day = "Saturday"
    } else {
     return a.day = "Sunday"
    }
    //a.day = a.name;
    //return a;
  });

  console.log("Full List:", fullArtistList) */
  return (
    <main id="artists-main">
      <header id="artists-header">
        <h1>Artists</h1>
        <hr></hr>
      </header>
      
      <ArtistList artists={artists}></ArtistList>
    </main>
  );
}

export default Artists;
