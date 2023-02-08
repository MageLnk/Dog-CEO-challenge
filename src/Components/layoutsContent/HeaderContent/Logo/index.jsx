import { Link } from "react-router-dom";
//
import img from "../../../../utilities/logo.png";
// Style
import "./style.css";
// App
const Logo = () => {
  return (
    <div className="header-img-container">
      <Link to="/">
        <img src={img} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
