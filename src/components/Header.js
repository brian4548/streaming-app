import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
// import GoogleAuth2 from "./GoogleAuth2";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Jolttv
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
