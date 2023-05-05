import { useEffect, useState } from "react";
// Context
import ApiContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const ApiContextProvider = ({ children }) => {
  const [dogHomeImages, setDogHomeImages] = useState([]);
  const [dogsImgsForCards, setDogsImgsForCards] = useState([]);

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
  const loadImagesForDogsWithoutSubBreed = async (breed, subBreed = "") => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breed/${breed}/images/random/4` });
      if (!data) {
        alert("Algo ha ocurrido. Inténtelo nuevamente");
        return;
      }
      let newArray = dogsImgsForCards;
      newArray.push({ name: breed, subBreed: subBreed, results: [...data.message] });
      setDogsImgsForCards([...newArray]);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };
  const loadImagesForDogsWithSubBreed = async (breed, subBreed) => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/4` });
      if (!data) {
        alert("Algo ha ocurrido. Inténtelo nuevamente");
        return;
      }
      let newArray = dogsImgsForCards;
      newArray.push({ name: breed, subBreed: subBreed, results: [...data.message] });
      setDogsImgsForCards([...newArray]);
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
      if (!data) {
        alert("Por favor, inténtelo nuevamente");
        return;
      }

      let newArray = allSubBreeds;
      //debugger;
      newArray.push({ name: breed, results: data.message });
      setAllSubBreeds([...newArray]);
      // Ahora necesito checkear si la raza tiene o no tiene sub-raza para traer inmediatamente fotos
      const lastNameOnNewArray = newArray[newArray.length - 1].name;
      const lastResultOnNewArray = newArray[newArray.length - 1].results.length === 0;
      if (lastResultOnNewArray) {
        loadImagesForDogsWithoutSubBreed(lastNameOnNewArray);
      }
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  const handleInput = async (breed) => {
    const breedLowerCase = breed.toLowerCase();
    const checkForBreed = Object.keys(allBreeds).filter((keyObject) => keyObject === breedLowerCase);
    if (checkForBreed.length === 0) {
      alert("La raza ingresada no corresponde");
      return;
    }
    // Pendiente de agregar el validador, si es que se repite la misma entrada en el input

    // La siguiente línea, es para apurar el momento de agregar la raza, traemos todas las sub-razas para mostrarlas.
    await getAllSubBreeds(breedLowerCase);
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
    // Acá borramos las fotos
    const indexImgsDogs = dogsImgsForCards.filter((target) => target.name !== breedName);
    setDogsImgsForCards([...indexImgsDogs]);
  };
  const selectSubBreed = (breed, subBreed) => {
    let newArray = activeSubBreedsToFilter;
    const indexSubBreed = newArray.indexOf(subBreed);
    // Si la sub-raza es -1, es porque es nueva. Entonces la agrega.
    if (indexSubBreed === -1) {
      newArray.push(subBreed);
      setActiveSubBreedsToFilter([...newArray]);
      // Ya que agregamos un filtro de sub-raza, llamemos de inmediato a la API
      loadImagesForDogsWithSubBreed(breed, subBreed);
      return;
    }
    // Si no, la borra, incluído las fotos
    const indexImgsDogs = dogsImgsForCards.filter((target) => target.subBreed !== subBreed);
    setDogsImgsForCards([...indexImgsDogs]);
    newArray.splice(indexSubBreed, 1);
    setActiveSubBreedsToFilter([...newArray]);
  };

  useEffect(() => {
    loadImagesForHome();
    getAllBreeds();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        allSubBreeds,
        dogHomeImages,
        activeBreedToFilter,
        dogsImgsForCards,
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
