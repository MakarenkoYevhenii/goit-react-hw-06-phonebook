import ContactForm from './contactForm/ContactForm';
import { useState, useEffect, useRef,useCallback } from 'react';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';


const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const App = () => {
  const firstRender = useRef(true);
  const [book, setBook] = useState({ ...initialState });
  useEffect(() => {
    if(firstRender.current){
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if(parsedContacts?.length){
        setBook({
          contacts: parsedContacts,
        });
      }
      firstRender.current=false;
    }
    else{
      localStorage.setItem('contacts', JSON.stringify(book.contacts));
    }
  },[book]);

  const addContact = useCallback((name, number) => {
    const { contacts } = book;
    const result = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (result) {
      alert(`${name} уже есть в списке`);
      return;
    }

    setBook(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  })
  const getFilteredPeople = () => {
    const { filter, contacts } = book;
    if (!filter) {
      return contacts;
    }
    
    const filterStr = filter.toLowerCase();
    const result = contacts.filter(item => {
      const title = item.name.toLowerCase();
      return title.includes(filterStr);
    });
    return result;
  };
  const removeHuman = bookId => {
    setBook(prevState => {
      const { contacts } = prevState;
      const newItems = contacts.filter(item => item.id !== bookId);
      return {
        contacts: newItems,
      };
    });
  };
  const handleChange = useCallback( e => {
    const { name, value } = e.target;
    setBook({
      ...initialState,
      [name]: value,
    });
  });
  const { filter } = book;
  const FilteredPeople = getFilteredPeople();
  return (
    <div className="registration__form">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList names={FilteredPeople} removeHuman={removeHuman} />
    </div>
  );
};

export default App;
