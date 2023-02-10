import { useContext } from "react";
// Contexts
import ApiContext from "../../Context/ApiContext";
// Style
import { Card } from "antd";
import "./style.css";
// Utils
import mayusFirstLetter from "../../utilities/mayusfirstLetter";
// App
const DeployCards = () => {
  const { dogsImgsForCards } = useContext(ApiContext);

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
          <span className="card-information-title">Raza: {mayusFirstLetter(name)}</span>
          <div className="card-information-deeper">
            {subBreed ? <span>Sub-raza: {mayusFirstLetter(subBreed)}</span> : <div></div>}
            <span>corazón</span>
          </div>
        </div>
      </Card>
    ));
  };

  return (
    <div className="card-content-container">
      {dogsImgsForCards.length === 0 ? <h2>Ups! Aún no realiza ninguna búsqueda</h2> : showCards(dogsImgsForCards)}
    </div>
  );
};

export default DeployCards;
