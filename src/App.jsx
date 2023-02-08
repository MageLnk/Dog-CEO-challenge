import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, Error404 } from "./Pages/";
// Layouts
import { Header, Footer } from "./Layouts/";
// App
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
