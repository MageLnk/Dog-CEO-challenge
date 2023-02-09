import { useEffect, useState } from "react";
// Context
import ApiContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const ApiContextProvider = ({ children }) => {
  const [dogHomeImages, setDogHomeImages] = useState([]);
  const [breedToFilter, setBreedToFilter] = useState([]);
  const [subBreedToFilter, setSubBreedToFilter] = useState([]);
  const [handleAllSubBreeds, setHandleAllSubBreeds] = useState({});

  const loadImagesForHome = async () => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breeds/image/random/5` });
      if (data) setDogHomeImages([...data.message]);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  const getSubBreeds = async (breed) => {
    try {
      console.log("subBreed", breed);
      const data = await apiCall({ url: `https://dog.ceo/api/breed/${breed}/list` });
      console.log("Data", data.message.hound);
      console.log("Data dos", data.message.breed);
      if (data) setHandleAllSubBreeds({ name: breed, results: [...data.message.breed] });
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
      console.error(e);
    }
  };

  const handleInput = async (breed) => {
    await getSubBreeds(breed);
    let newArray = breedToFilter;
    newArray.push(breed);
    setBreedToFilter([...newArray]);
  };

  const deleteFilter = (type, filterName) => {
    if (type === "Breed") {
      const index = breedToFilter.indexOf(filterName);
      const newArray = breedToFilter.splice(index, 1);
      setDogHomeImages([...newArray]);
    }
  };

  useEffect(() => {
    loadImagesForHome();
  }, []);

  return (
    <ApiContext.Provider value={{ dogHomeImages, breedToFilter, subBreedToFilter, handleInput, deleteFilter }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
