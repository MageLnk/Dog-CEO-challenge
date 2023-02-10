import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
import LanguageContext from "../../../../Context/LanguageContext";
// Style
import "./style.css";
// Uttils
import mayusFirstLetter from "../../../../utilities/mayusfirstLetter";
// App
const DeployBreedFilters = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { activeBreedToFilter, deleteFilters } = useContext(ApiContext);

  const deployFilters = (array) => {
    return array.map((result) => (
      <span key={result} className="search-pet-filter">
        <b>{mayusFirstLetter(result)}</b>
        {` `}
        <span className="search-pet-filter-delete" onClick={() => deleteFilters(result)}>
          X
        </span>
      </span>
    ));
  };

  return (
    <div className="search-pet-breed-container">
      <h4>{siteLanguage && siteLanguage.Components.pagesContent.SearchPetContent.DeployBreedFilters.breedH4}</h4>
      <div>{deployFilters(activeBreedToFilter)}</div>
    </div>
  );
};

export default DeployBreedFilters;
