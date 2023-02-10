import { useContext, useEffect } from "react";
// Contexts
import ApiContext from "../../../Context/ApiContext";
// Components
import DeployBreedFilters from "./DeployBreedFilters";
import DeploySubBreedFilters from "./DeploySubBreedFilters";
// Style
import "./style.css";
// App
const SearchPetContent = () => {
  const { activeBreedToFilter, getAllBreeds } = useContext(ApiContext);

  useEffect(() => {
    getAllBreeds();
    // Solo es necesario que se cargue UNA VEZ cuando entre a la página search y no saturar el server.
    // eslint-disable-next-line
  }, []);

  return (
    <div className="search-pet-content-container">
      <div className="search-pet-flex-column">
        {activeBreedToFilter.length === 0 ? (
          ""
        ) : (
          <>
            <DeployBreedFilters />
            <DeploySubBreedFilters />
          </>
        )}

        <div className="search-pet-results-container">
          <span>Resultados</span>
        </div>
      </div>
    </div>
  );
};

export default SearchPetContent;
