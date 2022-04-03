import { createAction, nanoid } from "@reduxjs/toolkit";


const add=createAction("contact/add",(data)=>{ 
   
    const newContact={
        
        ...data,
        id:nanoid()
    }
    return{
        payload:newContact
    }
})

const remove =createAction("contact/remove")

const filter=createAction("contact/filter")


const actions ={
    add,
    remove,
    filter
}

export default actions