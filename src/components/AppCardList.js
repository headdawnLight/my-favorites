import { useContext } from "react";
import { FavsContext } from "../contexts/FavsContext";
import AppCard from "./AppCard";

const AppCardList = () => {
  const { sortedFavs, search } = useContext(FavsContext);

  return (
    <section className="Card-list-section min-vh-100">
      <div className="row m-4 d-flex justify-content-center">
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
              className="col-xl-3 col-lg-4 col-md-6 col-sm-7 my-3"
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
