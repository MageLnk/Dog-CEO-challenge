import { useContext } from "react";
// Contexts
import LanguageContext from "../../../../Context/LanguageContext";
import ScreenContext from "../../../../Context/ScreenContext";
// Style
import "./style.css";
// App
const Search = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { screenSize } = useContext(ScreenContext);

  return (
    <input
      className={`${screenSize === "Mobile" ? "search-input-xs" : "search-input"}`}
      placeholder={siteLanguage && siteLanguage.Components.layoutsContent.HeaderContent.Search.placeholder}
    ></input>
  );
};

export default Search;
