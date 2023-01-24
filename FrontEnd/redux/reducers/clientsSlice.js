import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
    name: "clients",
    initialState: {
        clientsList: [],
        clientId: null,
        displayOption: '',
        clientAcc: {},
        favouritesList: {},
        bookedList: {},
        favourite: {}
    },
    reducers: {
        getAllClients: (state, action) => {
            state.clientsList = action.payload
        },
        getClientId: (state, action) => {
            state.clientId = action.payload
        },
        setDisplayOption: (state, action) => {
            state.displayOption = action.payload
        },
        getClientEmail: (state, action) => {
            state.clientAcc = action.payload
        },
        getFavouritesList: (state, action) => {
            state.favouritesList = action.payload
        },
        getBookedList: (state, action) => {
            state.bookedList = action.payload
        },
        getOneFavourite: (state, action) => {
            state.favourite = action.payload
        }
    }
})

export const {getAllClients, getClientId, setDisplayOption, getClientEmail, getFavouritesList, getBookedList, getOneFavourite} = clientsSlice.actions

export default clientsSlice.reducer