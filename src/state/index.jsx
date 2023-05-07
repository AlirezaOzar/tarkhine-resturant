import {createSlice} from "@reduxjs/toolkit";
import { productsData } from "../data";

const initialState = {
    cart: [],
    items: [],
    productsData,
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            const updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id);

            if(updatedItemIndex < 0){
                updatedCart.push({...action.payload,quantity: 1})
            }else{
                const updatedItem = {...updatedCart[updatedItemIndex]};
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return {...state,cart: updatedCart}
        },
        removeFromCart: (state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id){
                    item.count++;
                }
                return item;
            })
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1){
                    item.count--;
                }
                return item;
            })
        },
        search: (state, action) => {
            const value = action.type.target.value;
            if(value === ""){
                return state;
            } else {
                const filterProducts = state.filter((p) => 
                p.name.toLowerCase().includes(value.toLowerCase()))
                return filterProducts;
            }
        }
    }
})

export const {
    removeFromCart,
    setItems,
    addToCart,
    decreaseCount,
    increaseCount,
    search,
} = cartSlice.actions;
export default cartSlice.reducer;