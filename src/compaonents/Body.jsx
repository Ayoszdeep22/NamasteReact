 import RestaurantContainer from "./RestaurantContainer";
 import resList from "../utils/mockdata";
 import { useState,useEffect } from "react";
 import Shimmer from "./Shimmer";
 const Body=()=>{
    // State varibale js 
    const [ListOfRestaurnats,SetListOfRestaurnats]=useState(resList);
    
    // useEffect(()=>{
    //   fetchData();
    // },[]);

    // const fetchData=async ()=>{
    //   const data=await fetch(
    //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9218109&lng=80.94013749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    //   );
    //   const json= await data.json();
    //   console.log(json);
    //   SetListOfRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
    // }
    
    



    return ListOfRestaurnats.length===0? <Shimmer/>: (
      <div className="body">
        <div className="filter"><button className="filter_btn" onClick={()=>{
            const fileteredList=ListOfRestaurnats.filter((res)=>res.data.avgRating>4);
            SetListOfRestaurnats(fileteredList);
            
            
        }}>Top rated restaurant</button>
        </div>
        <div className="conatiner">
          {/* <RestaurantContainer resName="KFC" couisne="Chicken,burger " />  */}
          {/* passing props to fn */}
          {/* <RestaurantContainer resData={resList[0]}/>
           <RestaurantContainer resData={resList[1]}/> */}
           {
            ListOfRestaurnats.map(i=><RestaurantContainer key={i.data.id} resData={i}/>)
           }
 </div>
 </div>);
 };
  
  export default Body;