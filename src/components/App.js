import AppHeader from "./AppHeader";
import AppCardList from "./AppCardList";
import FavsContextProvider from "../contexts/FavsContext";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <FavsContextProvider>
          <AppHeader />
          <AppCardList />
        </FavsContextProvider>
      </main>
    </div>
  );
};

export default App;
