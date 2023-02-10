import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
// Style
import "./style.css";
// Utils
import mayusFirstLetter from "../../../../utilities/mayusfirstLetter";
// App
const DeploySubBreedFilters = () => {
  const { allSubBreeds } = useContext(ApiContext);

  const showFilters = (array) => {
    return array.map((result) => (
      <div key={result} className="search-pet-sub-breed-filter-container">
        <span className="search-pet-sub-breed-filter-title">
          <b>{mayusFirstLetter(result.name)}</b>
        </span>
        <div className="search-pet-sub-breed-filter-list">{deployFilters(result.results)}</div>
      </div>
    ));
  };

  const deployFilters = (array) => {
    return array.map((result) => (
      <span key={result} className="search-pet-filter">
        {result}
      </span>
    ));
  };

  return (
    <div className="search-pet-sub-breed-container">
      <h4>Sub-razas</h4>
      {showFilters(allSubBreeds)}
    </div>
  );
};

export default DeploySubBreedFilters;
