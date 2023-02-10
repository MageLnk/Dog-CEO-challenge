import { useContext } from "react";
// Contexts
import ApiContext from "../../Context/ApiContext";
// Style
import { Card } from "antd";
import "./style.css";
// App
const DeployCards = () => {
  const { dogWithoutSubBreedImgs } = useContext(ApiContext);

  const showCards = (array) => array.map((result) => deployCards(result.name, result.results));

  const deployCards = (name, array) => {
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
          <span className="card-information-title">Raza: {name}</span>
          <div className="card-information-deeper">
            {result.subBreed ? <span>Sub-raza: ${result.subBreed}</span> : <div></div>}
            <span>corazón</span>
          </div>
        </div>
      </Card>
    ));
  };

  console.log("dogWithoutSubBreedImgs", dogWithoutSubBreedImgs);

  return (
    <div className="card-content-container">
      {!dogWithoutSubBreedImgs ? <h2>Ups! Aún no realiza ninguna búsqueda</h2> : showCards(dogWithoutSubBreedImgs)}
    </div>
  );
};

export default DeployCards;
