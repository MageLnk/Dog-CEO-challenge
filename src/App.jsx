import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// Contexts
import LanguageContext from "./Context/LanguageContext";
import ScreenContext from "./Context/ScreenContext";
// Pages
import { Home, SearchPet, FavoritesPets, Error404 } from "./Pages/";
// Layouts
import { Header, Footer } from "./Layouts/";
// Style
import "./App.css";
// App
const App = () => {
  const { setScreenSize } = useContext(ScreenContext);
  const { handleLenguage } = useContext(LanguageContext);
  const isDesktop = useMediaQuery({
    query: "(min-width: 580px)",
  });

  // useEffect for ScreenSize purpose
  useEffect(() => {
    if (isDesktop) {
      setScreenSize("Desktop");
    } else {
      setScreenSize("Mobile");
    }
  }, [isDesktop, setScreenSize]);

  // useEffect for Languages purpose
  useEffect(() => {
    const loadLanguage = JSON.parse(localStorage.getItem("language"));
    if (!loadLanguage) {
      localStorage.setItem("language", JSON.stringify("en"));
      handleLenguage("en");
      return;
    }
    // En teoría, debería ser suficiente. Podría poner otro If, pero, en producción se supone que no hace doble
    // render, así que debería andar bien.
    handleLenguage(loadLanguage);

    // Solo es necesario que se cargue UNA VEZ.
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPet />} />
          <Route path="/favorites" element={<FavoritesPets />} />

          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
