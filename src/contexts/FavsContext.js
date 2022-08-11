import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const FavsContext = createContext();

const FavsContextProvider = (props) => {
  const reducer = (favs, action) => {
    switch (action.type) {
      case "add_fav":
        return [
          ...favs,
          {
            id: uuidv4(),
            image: action.fav.image,
            title: action.fav.title,
            items: action.fav.items,
          },
        ];

      case "update_fav":
        return favs.map((fav) =>
          fav.id === action.id ? action.updatedFav : fav
        );

      case "remove_fav":
        return favs.filter((fav) => fav.id !== action.id);

      default:
        return favs;
    }
  };

  const [favs, dispatch] = useReducer(
    reducer,

    []
  );

  const sortedFavs = favs.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <FavsContext.Provider value={{ sortedFavs, dispatch }}>
      {props.children}
    </FavsContext.Provider>
  );
};

export default FavsContextProvider;
