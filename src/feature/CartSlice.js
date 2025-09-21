    import { createSlice } from "@reduxjs/toolkit";
    const CartSlice=createSlice({
        name:"cart",
        initialState:{items:[]},
        reducers:{
            //these are reducer with name which map to actions
            addItem:(state,action)=>{
                state.items.push(action.payload);
            },
            removeItem:(state)=>{
                state.items.pop();
            },
            clearCart:(state)=>{
                state.items.length=0;
                // redux says that we should muttae the state or just return a new state
                // we cant use [] as it just not modfting th estate orginl astate
            }
        }


    });
    export const {addItem,removeItem,clearCart}=CartSlice.actions;
    export default CartSlice.reducer;
