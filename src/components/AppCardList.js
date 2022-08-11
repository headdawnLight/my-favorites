import { useContext } from "react";
import { FavsContext } from "../contexts/FavsContext";
import AppCard from "./AppCard";
import "../styles/AppCardList.css";

const AppCardList = () => {
  const { sortedFavs } = useContext(FavsContext);

  return (
    <div className="Card-list">
      {sortedFavs.map((fav) => (
        <div className="Card" key={fav.id}>
          <AppCard fav={fav} />
        </div>
      ))}
    </div>
  );
};

export default AppCardList;
