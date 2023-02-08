// Providers
import GeneralContext from "./GeneralContext/Provider";
import ScreenContext from "./ScreenContext/Provider";
import LanguageContext from "./LanguageContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <GeneralContext>
      <ScreenContext>
        <LanguageContext>
          <App />
        </LanguageContext>
      </ScreenContext>
    </GeneralContext>
  );
};

export default AppProvider;
