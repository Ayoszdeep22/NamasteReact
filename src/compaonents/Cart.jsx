import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../feature/CartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handledelete=()=>{
        dispatch(clearCart());
       


    };
    
    return (
        <div className="text-center p-6 m-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
            </div>
            {cartItems.length === 0 ? (
                <div className="text-xl text-gray-600 p-10 bg-gray-50 rounded-lg shadow-sm">
                    <h2 className="font-bold mb-2">Your cart is empty!</h2>
                   
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center p-4 border-b">
                        <p className="text-lg font-medium">
                            Total Items: <span className="text-amber-600">{cartItems.length}</span>
                        </p>
                        <button 
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
                            onClick={handledelete}
                        >
                            Clear Cart
                        </button>
                    </div>
                    <ItemList className="text-white" items={cartItems}/>
                </div>
            )}
        </div>
    );
}

export default Cart;