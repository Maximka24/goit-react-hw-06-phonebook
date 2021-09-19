import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

import GetFilterContacts from "./GetFilterContacts/GetFilterContacts";
import ContactFilterList from "./ContactFilterList/ContactFilterList";

const Contacts = ({
  mainListContact,
  contactsList,
  onDeleteContact,
  filterContacts,
  onChangeFilter,
}) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Contacts</h2>
      {mainListContact.length === 0 ? (
        <p>Sorry! No contacts...</p>
      ) : (
        <>
          <GetFilterContacts
            filterContacts={filterContacts}
            onChangeFilter={onChangeFilter}
          />
          <ContactFilterList
            onDeleteContact={onDeleteContact}
            contactsList={contactsList}
          />
        </>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.array.isRequired,
  mainListContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filterContacts: PropTypes.string.isRequired,
};

export default Contacts;
