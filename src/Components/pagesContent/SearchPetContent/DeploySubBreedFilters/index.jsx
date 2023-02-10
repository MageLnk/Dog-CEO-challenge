import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
import LanguageContext from "../../../../Context/LanguageContext";
// Style
import "./style.css";
// Utils
import mayusFirstLetter from "../../../../utilities/mayusfirstLetter";
// App
const DeploySubBreedFilters = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { allSubBreeds, selectSubBreed, activeSubBreedsToFilter } = useContext(ApiContext);

  const checkSelectionOfSubBreed = (subBreed) => {
    const checkSelection = activeSubBreedsToFilter.filter((result) => result === subBreed);
    if (checkSelection.length === 0) {
      return "search-pet-filter";
    }
    return "search-pet-filter-selected";
  };

  const showFilters = (array) => {
    //console.log("Viendo algo", array);
    return array.map((result) => (
      <div key={result.name} className="search-pet-sub-breed-filter-container">
        <span className="search-pet-sub-breed-filter-title">
          <b>{mayusFirstLetter(result.name)}</b>
        </span>
        <div className="search-pet-sub-breed-filter-list">{deployFilters(result.name, result.results)}</div>
      </div>
    ));
  };
  const deployFilters = (breed, array) => {
    return array.map((result) => (
      <span key={result} className={checkSelectionOfSubBreed(result)} onClick={() => selectSubBreed(breed, result)}>
        {mayusFirstLetter(result)}
      </span>
    ));
  };

  return (
    <div className="search-pet-sub-breed-container">
      <h4>{siteLanguage && siteLanguage.Components.pagesContent.SearchPetContent.DeploySubBreedFilters.subBreedH4}</h4>

      {showFilters(allSubBreeds)}
    </div>
  );
};

export default DeploySubBreedFilters;
