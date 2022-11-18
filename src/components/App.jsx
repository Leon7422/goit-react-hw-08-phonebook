import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, addContactApi } from 'redux/operations';

export const Phonebook = () => {
  const filteredContacts = useSelector(getFilter);
  const actualContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkContactsDublicate = data => {
    const userData = actualContacts.value.find(contact => {
      if (contact.name === data.name) {
        return data.name;
      }
      return false;
    });
    return userData;
  };

  const formSubmitHandler = data => {
    const userInfo = checkContactsDublicate(data);
    if (userInfo) {
      return alert(`${userInfo.name} is already in contact`);
    }
    dispatch(addContactApi({ name: data.name, number: data.number }));
  };

  const normilezedFilter = filteredContacts.value.toLowerCase();
  const visibleContacts = actualContacts.value.filter(el => {
    return el.userInfo.name.toLowerCase().includes(normilezedFilter);
  });

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />

      <h3>Contacts</h3>
      <Filter />
      <ContactList actualData={visibleContacts} />
    </Container>
  );
};
