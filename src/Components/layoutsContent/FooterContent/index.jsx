import { useContext } from "react";
// Contexts
import LanguageContext from "../../../Context/LanguageContext";
import ScreenContext from "../../../Context/ScreenContext";
// Style
import { BiRegistered } from "react-icons/bi";
import "./style.css";
// App
const FooterContent = () => {
  const { siteLanguage } = useContext(LanguageContext);
  const { screenSize } = useContext(ScreenContext);

  return (
    <div className="footer-content-container">
      <span className={`${screenSize === "Mobile" ? "footer-span-xs" : "footer-span"}`}>
        {siteLanguage && siteLanguage.Components.layoutsContent.FooterContent.span} <BiRegistered />
      </span>
    </div>
  );
};

export default FooterContent;
