import { useState } from "react";
// Context
import ScreenContext from "./";

const ScreenContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState("");

  return <ScreenContext.Provider value={{ screenSize, setScreenSize }}>{children}</ScreenContext.Provider>;
};

export default ScreenContextProvider;
