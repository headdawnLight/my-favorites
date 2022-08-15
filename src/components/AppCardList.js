import { useContext } from "react";
import { FavsContext } from "../contexts/FavsContext";
import AppCard from "./AppCard";

const AppCardList = () => {
  const { sortedFavs, search } = useContext(FavsContext);

  return (
    <section id="Card-list-section">
      <div className="row mx-2 d-flex justify-content-center">
        {sortedFavs
          .filter((fav) => {
            if (search === "") {
              return fav;
            } else if (fav.title.toLowerCase().includes(search.toLowerCase())) {
              return fav;
            }
          })
          .map((fav) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-8 my-4"
              key={fav.id}
            >
              <AppCard fav={fav} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default AppCardList;
