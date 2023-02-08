// Providers
import GeneralContext from "./GeneralContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <GeneralContext>
      <App />
    </GeneralContext>
  );
};

export default AppProvider;
