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




const actions ={
    add,
    remove,
}

export default actions