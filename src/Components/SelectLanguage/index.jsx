import { useContext } from "react";
// Contexts
import LanguageContext from "../../Context/LanguageContext";
// Style
import "./style.css";
// App
const SelectLanguage = () => {
  const { language } = useContext(LanguageContext);

  const handleLenguageSelection = (language) => {
    localStorage.setItem("language", JSON.stringify(language));
    window.location.reload();
  };

  return (
    <div className="language-options-container">
      <span
        className={`language ${language === "es" && "language-selected"}`}
        onClick={() => handleLenguageSelection("es")}
      >
        ES
      </span>{" "}
      /{" "}
      <span
        className={`language ${language === "en" && "language-selected"}`}
        onClick={() => handleLenguageSelection("en")}
      >
        EN
      </span>
    </div>
  );
};

export default SelectLanguage;
