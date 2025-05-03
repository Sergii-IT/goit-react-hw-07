import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
