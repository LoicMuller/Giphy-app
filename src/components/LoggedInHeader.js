import { Link } from "react-router-dom";
import logoHeader from "../images/logo.png";
import { useHistory } from "react-router-dom";

const LoggedInHeader = ({ setLoggedIn }) => {
  const history = useHistory();
  return (
    <nav className="__header flex dark__bg">
      <div className="flex align_itm_ctr">
        <img
          className="c__pointer"
          src={logoHeader}
          alt="logo header"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="flex align_itm_ctr">
        <Link to="/" onClick={() => setLoggedIn(false)}>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default LoggedInHeader;
