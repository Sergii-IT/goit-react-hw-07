import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { SearchBox } from './components/SearchBox/SearchBox';
import css from './App.module.css'; 

export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook 📱</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      
      <SearchBox />
      <ContactList />
    </div>
  );
}
