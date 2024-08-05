import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import INITIAL_CONTACT from "./data.json";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("saved-contacts")) ?? INITIAL_CONTACT
  );
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((currentContactsList) => [...currentContactsList, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((currentContactsList) =>
      currentContactsList.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputName.toLowerCase())
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputName={inputName} setInputName={setInputName} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
