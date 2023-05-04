import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    items: [],
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
            state.cart = state.cart.map((item) => item.id !== action.payload.id)
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
        }
    }
})

export const {
    removeFromCart,
    setItems,
    addToCart,
    decreaseCount,
    increaseCount,
} = cartSlice.actions;
export default cartSlice.reducer;