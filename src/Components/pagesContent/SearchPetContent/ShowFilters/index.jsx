import { useContext } from "react";
// Contexts
import ApiContext from "../../../../Context/ApiContext";
// Style
import "./style.css";
// App
const ShowFilters = () => {
  const { breedToFilter, deleteFilter, test } = useContext(ApiContext);

  const deployFilters = (array) => {
    const test = array.map((result) => (
      <span key={result} className="search-pet-filter">
        <b>{result}</b>{" "}
        <span className="search-pet-filter-delete" onClick={() => deleteFilter("Breed", result)}>
          X
        </span>
      </span>
    ));
    return test;
  };

  return (
    <div className="search-pet-breed-container">
      <h4>Razas</h4>
      <div>{deployFilters(breedToFilter)}</div>
    </div>
  );
};

export default ShowFilters;
