import React from "react";
import PropTypes from "prop-types";

import s from "./ContactFilterList.module.css";

export default function ContactFilterList({ contactsList, onDeleteContact }) {
  return (
    <ul className={s.List}>
      {contactsList.map(({ id, name, number }) => (
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
  contactsList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
