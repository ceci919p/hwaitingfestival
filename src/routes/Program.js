import ProgramNav from "../components/ProgramNav";
import MonProgram from "../components/programs/MonProgram";
import TueProgram from "../components/programs/TueProgram";
import WedProgram from "../components/programs/WedProgram";
import ThuProgram from "../components/programs/ThuProgram";
import FriProgram from "../components/programs/FriProgram";
import SatProgram from "../components/programs/SatProgram";
import SunProgram from "../components/programs/SunProgram";

export default function Program(props) {
  //console.log(props.schedule);

  return (
    <main id="program-main">
      <header id="program-header">
        <h1>Program</h1>
        <hr></hr>
      </header>
      <ProgramNav schedule={props.schedule}></ProgramNav>
      <MonProgram schedule={props.schedule}></MonProgram>
      <TueProgram schedule={props.schedule}></TueProgram>
      <WedProgram schedule={props.schedule}></WedProgram>
      <ThuProgram schedule={props.schedule}></ThuProgram>
      <FriProgram schedule={props.schedule}></FriProgram>
      <SatProgram schedule={props.schedule}></SatProgram>
      <SunProgram schedule={props.schedule}></SunProgram>
    </main>
  );
}
