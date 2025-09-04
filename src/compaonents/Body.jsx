 import RestaurantContainer from "./RestaurantContainer";
 import resList from "../utils/mockdata"
 const Body=()=>{
    return (
      <div className="body">
        <div className="search">SEARCH</div>
        <div className="conatiner">
          {/* <RestaurantContainer resName="KFC" couisne="Chicken,burger " />  */}
          {/* passing props to fn */}
          {/* <RestaurantContainer resData={resList[0]}/>
           <RestaurantContainer resData={resList[1]}/> */}
           {
            resList.map(i=><RestaurantContainer key={i.data.id} resData={i}/>)
           }
 </div>
 </div>);
 };
  
  export default Body;