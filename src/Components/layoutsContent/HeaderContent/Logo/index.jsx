import { Link } from "react-router-dom";
//
import img from "../../../../utilities/logo.png";
// Style
import "./style.css";
// App
const Logo = () => {
  return (
    <Link to="/">
      <img className="img-logo" src={img} alt="Logo" />
    </Link>
  );
};

export default Logo;
