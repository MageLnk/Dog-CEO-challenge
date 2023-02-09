import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// Contexts
import LanguageContext from "../../../../Context/LanguageContext";
import ScreenContext from "../../../../Context/ScreenContext";
import ApiContext from "../../../../Context/ApiContext";

// Style
import "./style.css";
// App
const Search = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const { siteLanguage } = useContext(LanguageContext);
  const { screenSize } = useContext(ScreenContext);
  const { handleInput } = useContext(ApiContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") return;

    handleInput(inputValue);
    setInputValue("");
    navigate(`/search`);
  };

  return (
    <form typeof="submit" onSubmit={(event) => handleSubmit(event)}>
      <input
        value={inputValue}
        className={`${screenSize === "Mobile" ? "search-input-xs" : "search-input"}`}
        placeholder={siteLanguage && siteLanguage.Components.layoutsContent.HeaderContent.Search.placeholder}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </form>
  );
};

export default Search;
