import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
import LanguageContext from "../../../../Context/LanguageContext";
// Style
import { Button } from "antd";
import "./style.css";
// App
const ImagesDogsDeploy = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { dogHomeImages } = useContext(ApiContext);

  const deployImages = (arrayImages) => {
    return arrayImages.map((result) => <img key={result} src={result} alt="Fotos" />);
  };

  return (
    <div className="home-wellcome-container">
      <h3>{siteLanguage && siteLanguage.Components.pagesContent.HomeContent.ImagesDogsDeploy.title}</h3>
      {dogHomeImages.length === 0 ? <Button loading /> : <section>{deployImages(dogHomeImages)}</section>}

      <h3>{siteLanguage && siteLanguage.Components.pagesContent.HomeContent.ImagesDogsDeploy.subtitle}</h3>
    </div>
  );
};

export default ImagesDogsDeploy;
