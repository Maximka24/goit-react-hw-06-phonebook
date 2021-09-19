import types from "./types";
import shortid from "shortid";

const addContacts = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filterContacts = (value) => ({
  type: types.FILTER_CONTACTS,
  payload: value,
});

export default { addContacts, deleteContact, filterContacts };
