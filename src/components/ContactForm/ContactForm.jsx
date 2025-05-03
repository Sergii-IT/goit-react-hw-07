import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(event) {
       event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (contacts.some(contact => typeof contact?.name === 'string' && contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: crypto.randomUUID(), name, number }));
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" required />
      </label>

      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>

      <button className={css.button} type="submit">Add contact</button>
    </form>
  );
}
