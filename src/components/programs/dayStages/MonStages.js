export default function MonStages({ schedule }) {
  //console.log(schedule);

  let cleanSchedule = [];
  //fjerner breaks fra schedule
  schedule.forEach((e) => {
    if (e.act !== "break") {
      cleanSchedule.push(e);
    }
  });

  let monMid = [];
  let monVan = [];
  let monJon = [];

  let monMidList = [];

  //get my acts on monday on desired stages
  monMid = cleanSchedule.filter(
    (act) => act.stage === "Midgard" && act.day === "mon"
  );
  monMid.forEach((a) => {
    monMidList.push(
      <li>
        {a.act} {a.start}
      </li>
    );
  });

  console.log(monMidList);

  /*   cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "mon") {
      monMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "mon") {
      monVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "mon") {
      monJon.push(el);
    }
  });

  let monMidList = [];
  monMid.forEach((m) => {
    monMidList.push(<h3 key={m.name}>{m.name}</h3>);
  });
  console.log(monMid[0]);
 */

  return (
    <>
      <article>
        <ul>{monMidList}</ul>
      </article>
      <article></article> <article></article>
    </>
  );
}
