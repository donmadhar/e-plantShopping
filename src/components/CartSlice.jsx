import {createSlice} from '@reduxjs/toolkit';
const slice=createSlice({name:'cart',initialState:{items:[]},reducers:{
addItem:(state,action)=>{const p=action.payload;const found=state.items.find(i=>i.id===p.id);if(found)found.quantity+=1;else state.items.push({...p,quantity:1});},
removeItem:(state,action)=>{const id=typeof action.payload==='string'?action.payload:action.payload.id;state.items=state.items.filter(i=>i.id!==id);},
updateQuantity:(state,action)=>{const {id,quantity}=action.payload;const item=state.items.find(i=>i.id===id);if(!item)return;if(quantity<=0)state.items=state.items.filter(i=>i.id!==id);else item.quantity=quantity;},
clearCart:(state)=>{state.items=[];}
}});
export const {addItem,removeItem,updateQuantity,clearCart}=slice.actions;
export default slice.reducer;