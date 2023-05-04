import {createSlice,} from '@reduxjs/toolkit'
const initialState={
    item:[],
    deliveryFee:15,
    freeDeliveryFrom:200
}
export const cartSlice=createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addCartItemn(state, action){
            const newProduct=action.payload.product;
            const isItemInCart:any=state.item.find((item:any)=>item.id===newProduct.id)
            if(isItemInCart){
                
                isItemInCart.quantity +=1;

            }
        }
    }

})