import { createContext } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  return (
    <FavoritesContext.Provider value={{}}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
