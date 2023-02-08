import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import apiCall from "../../utilities/api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("nada");

  const exampleUseApiCall = async (userId) => {
    try {
      const data = await apiCall({ url: `http://insertApiAddress` });
      // Insert setData(data)
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    console.log(
      "No olvidar que una buen ejemplo para traer data desde una Api al momento de cargar la app, es usar el useEffect acá"
    );
  }, []);

  return <GeneralContext.Provider value={{ data }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
