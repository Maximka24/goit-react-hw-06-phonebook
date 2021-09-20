import React from "react";

import s from "./Contacts.module.css";

import { useSelector } from "react-redux";

import GetFilterContacts from "./GetFilterContacts/GetFilterContacts";
import ContactFilterList from "./ContactFilterList/ContactFilterList";

const Contacts = () => {
  const mainListContact = useSelector((state) => state.phoneBook.contacts);
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Contacts</h2>
      {mainListContact.length === 0 ? (
        <p>Sorry! No contacts...</p>
      ) : (
        <>
          <GetFilterContacts />
          <ContactFilterList />
        </>
      )}
    </div>
  );
};

export default Contacts;
