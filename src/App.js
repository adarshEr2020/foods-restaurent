import "./App.css";
import { AppProvider } from "./context/context";
import Routers from "./routers/Router";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routers />
      </AppProvider>
    </div>
  );
}

export default App;
