import PropTypes from "prop-types";

import style from "./GetFilterContacts.module.css";

export default function GetFilterContacts({ filterContacts, onChangeFilter }) {
  return (
    <>
      <label className={style.Container}>
        Find contacts by name:
        <input
          type="text"
          name="name"
          value={filterContacts}
          onChange={onChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
}

GetFilterContacts.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filterContacts: PropTypes.string.isRequired,
};
