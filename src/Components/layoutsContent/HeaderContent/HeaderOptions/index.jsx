// Style
import { Link } from "react-router-dom";
import "./style.css";
// App
const HeaderOptions = () => {
  return (
    <div className="header-options-container">
      <Link to={"/search"}>
        <span>Buscar</span>
      </Link>
      <Link to={"/favorites"}>
        <span>Favoritos</span>
      </Link>

      <span>ES/EN</span>
    </div>
  );
};

export default HeaderOptions;
