import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  useEffect(() => {
    console.log("use effect called!");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const list =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(list.map((l) => {
      return {
        name: l.info.name,
        avgRating: l.info.avgRating,
        cuisines: l.info.cuisines,
        costForTwo: l.info.costForTwo,
        cloudinaryImageId:l.info.cloudinaryImageId,
        deliveryTime:l.info.sla.deliveryTime,
        id:l.info.id
      };
    }));
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          type="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (r) => parseInt(r.avgRating) > 3.8
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>{" "}
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
