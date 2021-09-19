import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

import { connect } from "react-redux";

import GetFilterContacts from "./GetFilterContacts/GetFilterContacts";
import ContactFilterList from "./ContactFilterList/ContactFilterList";

const Contacts = ({ mainListContact }) => {
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

Contacts.propTypes = {
  mainListContact: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  mainListContact: state.phoneBook.contacts,
});

export default connect(mapStateToProps)(Contacts);
