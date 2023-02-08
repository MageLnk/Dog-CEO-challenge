import { useEffect, useState } from "react";
// Context
import LanguageContext from ".";
// Languages
import { en, es } from "../../utilities/language/";
// App
const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [siteLanguage, setSiteLanguage] = useState("");

  const handleLenguage = (languageSelected) => {
    setLanguage(languageSelected);
  };

  useEffect(() => {
    if (language === "en") {
      setSiteLanguage(en);
    }
    if (language === "es") {
      setSiteLanguage(es);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, siteLanguage, handleLenguage }}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
