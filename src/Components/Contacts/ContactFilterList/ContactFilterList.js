import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import actions from "../../../redux/actions";

import s from "./ContactFilterList.module.css";

function ContactFilterList({ mainListContact, onDeleteContact }) {
  return (
    <ul className={s.List}>
      {mainListContact.map(({ id, name, number }) => (
        <li key={id} className={s.ElemList}>
          <p>
            {name}: {number}
          </p>
          <button className={s.Btn} onClick={() => onDeleteContact(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactFilterList.propTypes = {
  mainListContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { contacts, filters } = state.phoneBook;
  const normalazFilter = filters.toLowerCase();

  const filterListContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalazFilter)
  );

  return {
    mainListContact: filterListContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilterList);
