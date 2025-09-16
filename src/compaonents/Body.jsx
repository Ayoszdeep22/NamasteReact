import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import useCard from "../utils/useCard";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

const Body = () => {
  const { listOfRestaurants, setListOfRestaurants, originalList } = useCard();
  const [searchText, setSearchText] = useState("");
  
  
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false){
    return (<h1> you are not connected to the internet</h1>)
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filtered = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = originalList.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setListOfRestaurants(filtered);
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
        {listOfRestaurants.map((i) => (
          <Link
            key={i.info.id}
            to={`/restaurants/${i.info.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <RestaurantContainer resData={i.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;