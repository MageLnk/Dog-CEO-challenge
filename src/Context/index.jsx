// Providers
import GeneralContext from "./GeneralContext/Provider";
import LanguageContext from "./LanguageContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <GeneralContext>
      <LanguageContext>
        <App />
      </LanguageContext>
    </GeneralContext>
  );
};

export default AppProvider;
