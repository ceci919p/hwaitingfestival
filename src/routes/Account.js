import MyAccount from "../components/MyAccount";
import LogInAccount from "../components/LogInAccount";

export default function Account({ fakeUsers, setIsLoggedIn, isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <MyAccount></MyAccount>
      ) : (
        <LogInAccount
          fakeUsers={fakeUsers}
          setIsLoggedIn={setIsLoggedIn}
        ></LogInAccount>
      )}
    </div>
  );
}
