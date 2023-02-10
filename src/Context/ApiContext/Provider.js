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

  const getAllBreeds = async () => {
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
    // La siguiente línea, es para apurar el momento de agregar la raza, traemos todas las sub-razas para mostrarlas.
    await getAllSubBreeds(breedLowerCase);
    // Pendiente de agregar el validador, si es que se repite la misma entrada en el input
    let newArray = activeBreedToFilter;
    newArray.push(breedLowerCase);
    setActiveBreedToFilter([...newArray]);
  };

  const deleteFilters = (breedName) => {
    // Acá borramos la raza.
    const indexBreed = activeBreedToFilter.indexOf(breedName);
    const newArrayBreed = activeBreedToFilter.splice(indexBreed, 1);
    setDogHomeImages([...newArrayBreed]);
    // Acá borramos la sub-raza relacionada a la raza, obviamente
    const indexSubBreed = allSubBreeds.filter((target) => target.name !== breedName);
    setAllSubBreeds([...indexSubBreed]);
  };

  const selectSubBreed = (subBreed) => {
    let newArray = activeSubBreedsToFilter;
    const indexSubBreed = newArray.indexOf(subBreed);
    // Si la sub-raza es -1, es porque es nueva. Entonces la agrega.
    if (indexSubBreed === -1) {
      newArray.push(subBreed);
      setActiveSubBreedsToFilter([...newArray]);
      return;
    }
    // Si no, la borra
    newArray.splice(indexSubBreed, 1);
    setActiveSubBreedsToFilter([...newArray]);
  };

  useEffect(() => {
    loadImagesForHome();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        allSubBreeds,
        dogHomeImages,
        activeBreedToFilter,
        activeSubBreedsToFilter,
        handleInput,
        getAllBreeds,
        deleteFilters,
        selectSubBreed,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
