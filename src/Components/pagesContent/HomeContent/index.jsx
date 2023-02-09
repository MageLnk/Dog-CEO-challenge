import { useContext } from "react";
// Contexts
import LanguageContext from "../../../Context/LanguageContext";
// Components
import ImagesDogsDeploy from "./ImagesDogsDeploy";
// Style
import "./style.css";
// App
const HomeContent = () => {
  const { siteLanguage } = useContext(LanguageContext);

  return (
    <div className="home-content-container">
      <h1 className="home-wellcome-title">{siteLanguage && siteLanguage.Components.pagesContent.HomeContent.title}</h1>
      <h2 className="home-wellcome-subtitle">
        {siteLanguage && siteLanguage.Components.pagesContent.HomeContent.subtitle}
      </h2>

      <ImagesDogsDeploy />
    </div>
  );
};

export default HomeContent;
