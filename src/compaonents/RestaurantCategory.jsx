import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{

  
    return(
        <div>
          <div className="6/12 mx-auto my-4 flex bg-amber-200  shadow-lg">
          <div className="flex justify-between">
            <span className="text-black text-2xl font-medium ">{data?.card?.card?.title}{"   ("}{(data?.card?.card?.itemCards.length)}{")"}</span>  
            <span>{">"}</span> 
            </div>
             {/* <ItemList items={data?.card?.card?.itemCards}/> */}
          </div>
           
        </div>
    )
}
export default RestaurantCategory;