import { useEffect, useState } from "react";
// Context
import ApiContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const ApiContextProvider = ({ children }) => {
  const [dogHomeImages, setDogHomeImages] = useState([]);

  const [activeBreedToFilter, setActiveBreedToFilter] = useState([]);
  const [activeSubBreedsToFilter, setActiveSubBreedsToFilter] = useState([]);

  const [allSubBreeds, setAllSubBreeds] = useState([]);
  const [allBreeds, setAllBreeds] = useState({});

  const loadImagesForHome = async () => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breeds/image/random/5` });
      if (data) setDogHomeImages([...data.message]);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  const loadAllBreeds = async () => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breeds/list/all` });
      if (data) setAllBreeds(data.message);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  const getAllSubBreeds = async (breed) => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breed/${breed}/list` });

      if (data) {
        let newArray = allSubBreeds;
        newArray.push({ name: breed, results: [...data.message[`${breed}`]] });
        setAllSubBreeds([...newArray]);
      }
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
      console.error(e);
    }
  };

  const handleInput = async (breed) => {
    const breedLowerCase = breed.toLowerCase();
    const checkForBreed = Object.keys(allBreeds).filter((keyObject) => keyObject === breedLowerCase);
    if (checkForBreed.length === 0) {
      alert("La raza ingresada no corresponde");
      return;
    }
    // Agregar el validador si es que se repite
    await getAllSubBreeds(breedLowerCase);
    let newArray = activeBreedToFilter;
    newArray.push(breedLowerCase);
    setActiveBreedToFilter([...newArray]);
  };

  const deleteFilters = (type, filterName) => {
    if (type === "Breed") {
      const index = activeBreedToFilter.indexOf(filterName);
      const newArray = activeBreedToFilter.splice(index, 1);
      setDogHomeImages([...newArray]);
    }
  };

  useEffect(() => {
    loadImagesForHome();
  }, []);

  return (
    <ApiContext.Provider
      value={{ loadAllBreeds, dogHomeImages, activeBreedToFilter, allSubBreeds, handleInput, deleteFilters }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
