import MyAccount from "../components/MyAccount";
import LogInAccount from "../components/LogInAccount";

export default function Account({ fakeUsers, setIsLoggedIn, isLoggedIn, fav }) {
  return (
    <div>
      {isLoggedIn ? (
        <MyAccount fav={fav}></MyAccount>
      ) : (
        <LogInAccount
          fakeUsers={fakeUsers}
          setIsLoggedIn={setIsLoggedIn}
        ></LogInAccount>
      )}
    </div>
  );
}
