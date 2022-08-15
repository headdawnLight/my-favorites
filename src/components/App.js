import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
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
          <AppFooter />
        </FavsContextProvider>
      </main>
    </div>
  );
};

export default App;
