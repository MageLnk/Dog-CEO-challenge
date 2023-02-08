import { NavLink } from "react-router-dom";
// Style
import "./style.css";
// App
const HeaderOptions = () => {
  return (
    <div className="header-options-container">
      <NavLink to={"/search"} className={({ isActive }) => (isActive ? "header-option-active" : "")}>
        <span>Buscar</span>
      </NavLink>
      <NavLink to={"/favorites"} className={({ isActive }) => (isActive ? "header-option-active" : "")}>
        <span>Favoritos</span>
      </NavLink>

      <span>ES/EN</span>
    </div>
  );
};

export default HeaderOptions;
