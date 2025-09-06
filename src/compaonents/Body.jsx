import { useState, useEffect } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";


const Body = () => {
  // original state names
  const [ListOfRestaurnats, SetListOfRestaurnats] = useState([]);
  // new state for untouched full list
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9218109&lng=80.94013749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const list =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
             // If API yields no data, fallback to mock data
  const finalList = list.length > 0 ? list : resList;
        SetListOfRestaurnats(finalList);
      setOriginalList(finalList);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      SetListOfRestaurnats(resList);
setOriginalList(resList);

    }
    
  };

  if (ListOfRestaurnats.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filtered = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    SetListOfRestaurnats(filtered);
  };

  const handleTopRated = () => {
    const filtered = originalList.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    SetListOfRestaurnats(filtered);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            placeholder="search here restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter_btn" onClick={handleTopRated}>
          Top rated restaurant
        </button>
      </div>

      <div className="conatiner">
        {ListOfRestaurnats.map((i) => (
          <RestaurantContainer key={i.info.id} resData={i.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
