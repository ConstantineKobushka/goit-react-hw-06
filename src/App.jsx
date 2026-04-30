import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container/Container';
import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import { addContact, deleteContact } from './redux/contactsSlice';
import { setFilter } from './redux/filterSlice';

const App = () => {
  const contacts = useSelector(state => state.contactsData.contacts);
  const searchValue = useSelector(state => state.filterValue.filter);
  const dispatch = useDispatch();

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };

  const ondeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const onSetSearchValue = value => {
    const action = setFilter(value);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.number.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox searchValue={searchValue} onSearch={onSetSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={ondeleteContact} />
    </Container>
  );
};

export default App;
