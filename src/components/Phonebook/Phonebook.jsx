

const Phonebook = () => {
    
  return (
    <div>
      <h1>Phonebook</h1>
      <form action="">
        <p>name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
        <p>Phone</p>
        <input type="text"></input>
        <button type="submit">add contact</button>
      </form>
      <h2>Contacts</h2>
      <label>фильтр:</label>
      <input type="text" name="filter" placeholder="по имени 'жертвы'"></input>
    </div>
  );
};

export default Phonebook;
