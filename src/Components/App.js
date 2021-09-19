import Section from "./Section/Section";
import PhoneBook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";

export default function App() {
  // useEffect(() => {
  //   const cont = localStorage.getItem("contacts");
  //   const parsContacts = JSON.parse(cont);

  //   if (parsContacts) {
  //     setContacts(parsContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Section>
      <PhoneBook />

      <Contacts />
    </Section>
  );
}
