// Components
import HeaderOptions from "./HeaderOptions";
import Search from "./Search";
import Logo from "./Logo";
// Style
import "./style.css";
// App
const HeaderContent = () => {
  return (
    <div className="header-content-container">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-input">
        <Search />
      </div>
      <div className="header-nav-options">
        <HeaderOptions />
      </div>
    </div>
  );
};

export default HeaderContent;
