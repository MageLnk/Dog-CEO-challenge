import { useContext } from "react";
// Contexts
import LanguageContext from "../../../../Context/LanguageContext";
// Style
import "./style.css";
// App
const Search = () => {
  const { siteLanguage } = useContext(LanguageContext);

  return (
    <input
      className="search-input"
      placeholder={siteLanguage && siteLanguage.Components.HeaderContent.Search.placeholder}
    ></input>
  );
};

export default Search;
