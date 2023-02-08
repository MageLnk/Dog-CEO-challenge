import Logo from "./Logo";
import Search from "./Search";
// Style
import "./style.css";
// App
const HeaderContent = () => {
  return (
    <div className="header-content-container">
      <Logo />
      <Search />
      <div className="header-nav-options">
        <span>Buscar</span>
        <span>Favoritos</span>
        <span>ES/EN</span>
      </div>
    </div>
  );
};

export default HeaderContent;
