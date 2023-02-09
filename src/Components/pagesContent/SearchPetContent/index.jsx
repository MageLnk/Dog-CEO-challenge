import { useContext } from "react";
// Contexts
import ApiContext from "../../../Context/ApiContext";
// Components
import ShowFilters from "./ShowFilters";
// Style
import "./style.css";
// App
const SearchPetContent = () => {
  const { breedToFilter } = useContext(ApiContext);
  return (
    <div className="search-pet-content-container">
      <div className="search-pet-flex-column">
        {breedToFilter.length === 0 ? "" : <ShowFilters />}

        <div className="search-pet-sub-breed-container">
          <h4>Sub-razas</h4>
          <div>
            <span>Acá van las razas escritas en el input</span>
          </div>
        </div>
        <div className="search-pet-results-container">
          <span>Resultados</span>
        </div>
      </div>
    </div>
  );
};

export default SearchPetContent;
