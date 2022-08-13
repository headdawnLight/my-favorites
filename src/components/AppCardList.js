import { useContext } from "react";
import { FavsContext } from "../contexts/FavsContext";
import AppCard from "./AppCard";
import "../styles/AppCardList.css";

const AppCardList = () => {
  const { sortedFavs } = useContext(FavsContext);

  return (
    <section id="Card-list-section">
      <div className="row mx-2 d-flex justify-content-center">
        {sortedFavs.map((fav) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-10 mt-4" key={fav.id}>
            <AppCard fav={fav} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppCardList;
