import { useContext } from "react";
import { NavLink } from "react-router-dom";
// Contetx
import LanguageContext from "../../../../Context/LanguageContext";
// Components
import { SelectLanguage } from "../../../";
// Style
import "./style.css";
// App
const HeaderOptions = () => {
  const { siteLanguage } = useContext(LanguageContext);

  return (
    <div className="header-options-container">
      <NavLink to={"/search"} className={({ isActive }) => (isActive ? "header-option-active" : "")}>
        <span>{siteLanguage && siteLanguage.Components.HeaderContent.HeaderOptions.spanSearch}</span>
      </NavLink>
      <NavLink to={"/favorites"} className={({ isActive }) => (isActive ? "header-option-active" : "")}>
        <span>{siteLanguage && siteLanguage.Components.HeaderContent.HeaderOptions.spanFavorites}</span>
      </NavLink>

      <SelectLanguage />
    </div>
  );
};

export default HeaderOptions;
