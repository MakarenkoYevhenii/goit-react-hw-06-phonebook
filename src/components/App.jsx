import ContactForm from './contactForm/ContactForm';

import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import actions from './redux/contacts/contacts-action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getAllContacts} from "./redux/contacts/contacts-selectors"
import { useState } from 'react';


const App = () => {
    const [filter,setFilter]=useState('')
    
    const contacts=useSelector(getAllContacts,shallowEqual)
    const dispatch=useDispatch();
    const addContact=(data)=> {
      const nameCheked=contacts.find((e)=>{
        return (data.name === e.name && data.number===e.number)
      })
      if(nameCheked){
      return  alert (`this ${data.name} already exist`)
      }
      return dispatch(actions.add(data))
    }
    const filteredContacts=()=>{
      const filtered=contacts.filter((e)=>{
        return e.name.toLowerCase().includes(filter.toLowerCase()) 
      })
      return filtered
    }

  
    const removeContact = (id)=> dispatch(actions.remove(id))
    
    
    const handleChange=({target})=>{
      const {value}=target
      return setFilter(value)
  }
  
  return (
    <div className="registration__form">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactList names={filteredContacts()} removeHuman={removeContact}/>
    </div>
  );
};

export default App;
