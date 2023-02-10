import { useContext } from "react";
// Contexts
import ApiContext from "../../Context/ApiContext";
import LanguageContext from "../../Context/LanguageContext";
// Style
import { AiTwotoneHeart } from "react-icons/ai";
import { Card } from "antd";
import "./style.css";
// Utils
import mayusFirstLetter from "../../utilities/mayusfirstLetter";
// App
const DeployCards = () => {
  const { dogsImgsForCards } = useContext(ApiContext);
  const { siteLanguage } = useContext(LanguageContext);

  const showCards = (array) => array.map((result) => deployCards(result.name, result.subBreed, result.results));

  const deployCards = (name, subBreed, array) => {
    return array.map((result) => (
      <Card
        key={result}
        hoverable
        style={{
          width: 240,
          margin: "0 1rem 0.6rem 1rem",
        }}
        cover={<img alt="dogs" src={`${result}`} />}
      >
        <div className="card-information-container">
          <span className="card-information-title">
            {siteLanguage && siteLanguage.Components.deployCards.spanBreed}: {mayusFirstLetter(name)}
          </span>
          <div className="card-information-deeper">
            {subBreed ? (
              <span>
                {siteLanguage && siteLanguage.Components.deployCards.spanSubBreed}: {mayusFirstLetter(subBreed)}
              </span>
            ) : (
              <div></div>
            )}
            <span>
              <AiTwotoneHeart />
            </span>
          </div>
        </div>
      </Card>
    ));
  };

  return (
    <div className="card-content-container">
      {dogsImgsForCards.length === 0 ? (
        <h2>{siteLanguage && siteLanguage.Components.deployCards.searchNotFoundH2}</h2>
      ) : (
        showCards(dogsImgsForCards)
      )}
    </div>
  );
};

export default DeployCards;
