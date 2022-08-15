import { createContext, useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const FavsContext = createContext();

const FavsContextProvider = (props) => {
  const reducer = (favs, action) => {
    switch (action.type) {
      case "create_fav":
        return [
          ...favs,
          {
            id: uuidv4(),
            image: action.fav.image,
            title: action.fav.title,
            fav1: action.fav.fav1,
            fav2: action.fav.fav2,
            fav3: action.fav.fav3,
          },
        ];

      case "update_fav":
        return favs.map((fav) =>
          fav.id === action.id ? action.updatedFav : fav
        );

      case "delete_fav":
        return favs.filter((fav) => fav.id !== action.id);

      default:
        return favs;
    }
  };

  const [favs, dispatch] = useReducer(
    reducer,

    [],

    () => {
      const favs = localStorage.getItem("favs");
      return favs ? JSON.parse(favs) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  });

  const [search, setSearch] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const sortedFavs = favs.sort((a, b) => (a.title < b.title ? -1 : 1));

  return (
    <FavsContext.Provider
      value={{ sortedFavs, search, onChangeHandler, dispatch }}
    >
      {props.children}
    </FavsContext.Provider>
  );
};

export default FavsContextProvider;
