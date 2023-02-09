import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
import ScreenContext from "../../../../Context/ScreenContext";
import LanguageContext from "../../../../Context/LanguageContext";
// Style
import { Button } from "antd";
import "./style.css";
// App
const ImagesDogsDeploy = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { screenSize } = useContext(ScreenContext);
  const { dogHomeImages } = useContext(ApiContext);

  const deployImages = (arrayImages) => {
    return arrayImages.map((result) => <img key={result} src={result} alt="Fotos" />);
  };

  const filterXs = (arrayImages) => {
    const filteringData = arrayImages.filter((result, index) => index < 3);
    return deployImages(filteringData);
  };

  return (
    <div className={`${screenSize === "Mobile" ? "home-wellcome-container-xs" : "home-wellcome-container"}`}>
      <h3>{siteLanguage && siteLanguage.Components.pagesContent.HomeContent.ImagesDogsDeploy.title}</h3>
      {dogHomeImages.length === 0 ? (
        <Button loading />
      ) : (
        <section>{screenSize === "Mobile" ? filterXs(dogHomeImages) : deployImages(dogHomeImages)}</section>
      )}

      <h3 className={screenSize === "Mobile" ? "home-wellcome-2nd-subtitle-xs" : ""}>
        {siteLanguage && siteLanguage.Components.pagesContent.HomeContent.ImagesDogsDeploy.subtitle}
      </h3>
    </div>
  );
};

export default ImagesDogsDeploy;
