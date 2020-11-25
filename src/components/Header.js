import { Link } from "react-router-dom";
import logoHeader from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase/firebase";

const Header = ({ loggedIn, setLoggedIn }) => {
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    setLoggedIn(false);
    history.push("/");
  };

  const signInBtn = !loggedIn && (
    <Link title="Click here to Sign In" to="/login">
      Sign In
    </Link>
  );

  const signUpBtn = !loggedIn && (
    <Link title="Click here to Sign Up" to="/signup">
      Sign Up
    </Link>
  );

  const signOutBtn = loggedIn && (
    <Link title="Click here to Sign Out" to="/" onClick={signOut}>
      Sign Out
    </Link>
  );

  return (
    <nav className="__header flex dark__bg">
      <div className="flex align_itm_ctr">
        <img
          title="Home"
          className="c__pointer"
          src={logoHeader}
          alt="logo header"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="flex align_itm_ctr">
        {signInBtn}
        {signUpBtn}
        {signOutBtn}
      </div>
    </nav>
  );
};

export default Header;
