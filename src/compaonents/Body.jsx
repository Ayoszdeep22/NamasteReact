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
        <div className="search p-4 m-4 border-s-red-300 flex items-center ">
          <input
            type="text"
            className=" border-solid border-black"
            placeholder="search here restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchbtn m-3 bg-amber-300 w-25 rounded-3xl" onClick={handleSearch}>
            Search
          </button>
           <button className="filter_btn m-3 bg-amber-300 w-35" onClick={handleTopRated}>
          Top rated restaurant
        </button>
        </div>
        
      </div>
      <div className="conatiner flex flex-wrap">
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