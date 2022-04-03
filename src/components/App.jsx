import ContactForm from './contactForm/ContactForm';

import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import actions from './redux/contacts/contacts-action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getAllContacts} from "./redux/contacts/contacts-selectors"


const App = () => {

    const contacts=useSelector(getAllContacts,shallowEqual)
    const dispatch=useDispatch();
    const addContact=(data)=> dispatch(actions.add(data))
    
    const removeContact = (id)=> dispatch(actions.remove(id))
 

   
    
  return (
    <div className="registration__form">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter  names={contacts} />
      <ContactList names={contacts} removeHuman={removeContact}/>
    </div>
  );
};

export default App;
