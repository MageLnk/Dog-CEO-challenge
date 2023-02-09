import { useContext } from "react";
// Contexts
import ScreenContext from "../../../Context/ScreenContext";
// Components
import { HeaderOptionsDesktop, HeaderOptionsMobile } from "./HeaderOptions/";
import Search from "./Search";
import Logo from "./Logo";
// Style
import "./style.css";
// App
const HeaderContent = () => {
  const { screenSize } = useContext(ScreenContext);
  return (
    <div className="header-content-container">
      <div className={`${screenSize === "Mobile" ? "header-logo-xs" : "header-logo"}`}>
        <Logo />
      </div>
      <div className={`${screenSize === "Mobile" ? "header-input-xs" : "header-input"}`}>
        <Search />
      </div>
      <div className={`${screenSize === "Mobile" ? "header-nav-options-xs" : "header-nav-options"}`}>
        {screenSize === "Mobile" ? <HeaderOptionsMobile /> : <HeaderOptionsDesktop />}
      </div>
    </div>
  );
};

export default HeaderContent;
