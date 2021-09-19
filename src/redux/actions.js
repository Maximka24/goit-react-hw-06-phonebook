import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContacts = createAction("contact/add", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contact/delete");

const filterContacts = createAction("contact/filter");

export default { addContacts, deleteContact, filterContacts };
