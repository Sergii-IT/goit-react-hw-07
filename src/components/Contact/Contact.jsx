import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.listItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={css.deleteButton}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

