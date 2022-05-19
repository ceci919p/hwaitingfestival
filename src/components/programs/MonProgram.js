import MonStage from "./dayStages/MonStages";

export default function MonProgram({ schedule }) {
  // console.log(schedule);

  //new array of all the stages
  const allStages = schedule.map((el) => ({
    name: el.stage,
  }));

  const uniStage = [];

  const cleanStages = allStages.filter((element) => {
    const isDuplicate = uniStage.includes(element.name);

    if (!isDuplicate) {
      uniStage.push(element.name);

      return true;
    }

    return false;
  });

  // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
  console.log(cleanStages);
  let allStageLists = [];
  //for each scene make article
  //for each element(scene) lav et element med array tilsvarende den scene
  /*   filteredStages.forEach((element) => {
    allStageLists.push(
      <article key={element}>
        {" "}
        <h3>{element}</h3>{" "}
      </article>
    );
  }); */

  //return array or object with scenes
  //om that article make new list

  return (
    <section>
      <h2>Monday 8/8</h2>
      {/*  {filteredStages.map((band) => {
        return <MonStage schedule={schedule} />;
      })} */}
    </section>
  );
}
