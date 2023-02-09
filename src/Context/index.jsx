// Providers
import ApiContext from "./ApiContext/Provider";
import ScreenContext from "./ScreenContext/Provider";
import LanguageContext from "./LanguageContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <ApiContext>
      <ScreenContext>
        <LanguageContext>
          <App />
        </LanguageContext>
      </ScreenContext>
    </ApiContext>
  );
};

export default AppProvider;
