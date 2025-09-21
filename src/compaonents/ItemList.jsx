
import { CDN_URL } from "../utils/constansts";
import { useDispatch } from "react-redux";
import { addItem } from "../feature/CartSlice.js";
const ItemList=({items})=>{
    console.log(items);
    const dispatch=useDispatch();
   
    const handleAddItemToCart=(item)=>{
    dispatch(addItem(item));
}


    
    return(
        <div className="bg-zinc-800 p-4">
            {items.map(item=>
                <div key={item?.card.info.id} className="p-4 border-b border-zinc-700 last:border-0" >
                      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`} />
                    <div className="flex justify-between mb-2">
                        <span className="font-medium text-lg text-zinc-100">{item.card.info.name}</span>
                        <span className="text-amber-400 ">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-1">{item?.card.info.description}</p>
                    {item?.card.info.finalPrice && (
                        <p className="text-xs text-amber-500">Final Price: ₹{item?.card.info.finalPrice/100}</p>
                    )}
                    <div className=""><button className="bg-amber-600 p-1  w-18 font-bold rounded-lg shadow-2xl "
                     onClick={()=>handleAddItemToCart(item)}>
                        Cart</button>
                    </div>
                    
                </div>
            )}
        </div>
    )

}
export default ItemList;