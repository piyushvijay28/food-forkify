import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

const Appslice = createSlice({
    name:"appSlice",
    initialState:{
        items:[],
        recipieIngridients:[],
        BookMarkData:[],
        toggle:false
    },
    reducers:{
        setItems : (state,action) => {
            state.items = action.payload;
        },
        setRecipieIng : (state, action) => {
            state.recipieIngridients = action.payload
        },
        setBookMarkData: (state,action) => {
           const data = state.items.filter((items) => {
            if(items.id === action.payload){
                return items;
            }
           })
           toast.success("added Bookmark", {
            position:"top-center",
            autoClose:1000
           })
           state.BookMarkData.push(data);
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        }
    }
})

export const {setItems, setRecipieIng, setBookMarkData, setToggle} = Appslice.actions;
export default Appslice.reducer