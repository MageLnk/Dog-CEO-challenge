import { useContext } from "react";
// Contexts
import ApiContext from "../../../Context/ApiContext";
// Components
import DeployCards from "../../deployCards";
import DeployBreedFilters from "./DeployBreedFilters";
import DeploySubBreedFilters from "./DeploySubBreedFilters";
// Style
import "./style.css";
// App
const SearchPetContent = () => {
  const { activeBreedToFilter } = useContext(ApiContext);

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
          <DeployCards />
        </div>
      </div>
    </div>
  );
};

export default SearchPetContent;
