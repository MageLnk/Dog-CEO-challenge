import { useEffect, useState } from "react";
// Context
import ApiContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const ApiContextProvider = ({ children }) => {
  const [dogHomeImages, setDogHomeImages] = useState([]);

  const loadImagesForHome = async (userId) => {
    try {
      const data = await apiCall({ url: `https://dog.ceo/api/breeds/image/random/5` });
      if (data) setDogHomeImages([...data.message]);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    loadImagesForHome();
  }, []);

  return <ApiContext.Provider value={{ dogHomeImages }}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
