import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // your original state names
  const [ListOfRestaurnats, SetListOfRestaurnats] = useState(resList);

  // new state to store the full/original list
  const [originalList, setOriginalList] = useState(resList);

  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
  //   );

  //   const json = await data.json();

  //   console.log(json);
  //   // * optional chaining
  //   // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  // };









  return ListOfRestaurnats.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            placeholder="search here restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              const filterRestaurant = originalList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetListOfRestaurnats(filterRestaurant);
            }}
          >
            Search
          </button> 
        </div>

        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = originalList.filter(
              (res) => res.data.avgRating > 4
            );
            SetListOfRestaurnats(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="conatiner">
        {ListOfRestaurnats.map((i) => (
          <RestaurantContainer key={i.data.id} resData={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
