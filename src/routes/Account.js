import MyAccount from "../components/MyAccount";
import LogInAccount from "../components/LogInAccount";

export default function Account({ fakeUsers, setIsSubmitted }) {
  return (
    <div>
      <LogInAccount
        fakeUsers={fakeUsers}
        setIsSubmitted={setIsSubmitted}
      ></LogInAccount>
      <MyAccount></MyAccount>
    </div>
  );
}
