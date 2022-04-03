import { configureStore } from "@reduxjs/toolkit"
import contactsReducer from "./contacts/contacts-reducer"



const store =configureStore({
    reducer:{contact:contactsReducer}
})


export default store