import { useState, useEffect } from "react";
import shortid from "shortid";

import Section from "./Section/Section";
import PhoneBook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    const cont = localStorage.getItem("contacts");
    const parsContacts = JSON.parse(cont);

    if (parsContacts) {
      setContacts(parsContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const dataSubmitForm = ({ name, number }) => {
    const arrayName = contacts.map((contact) => contact.name.toLowerCase());
    const checkName = arrayName.includes(name.toLowerCase());

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const elContact = {
        id: shortid.generate(),
        name,
        number,
      };

      setContacts((prevState) => [elContact, ...prevState]);
    }
  };

  const changeFilterContacts = (e) => {
    setFilters(e.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const normalazFilter = filters.toLowerCase();
  const filterListContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalazFilter)
  );

  return (
    <Section>
      <PhoneBook submitForm={dataSubmitForm} />

      <Contacts
        mainListContact={contacts}
        onChangeFilter={changeFilterContacts}
        filterContacts={filters}
        contactsList={filterListContacts}
        onDeleteContact={deleteContact}
      />
    </Section>
  );
}
