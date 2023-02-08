import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, SearchPet, FavoritesPets, Error404 } from "./Pages/";
// Layouts
import { Header, Footer } from "./Layouts/";
// Style
import "./App.css";
// App
const App = () => {
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
