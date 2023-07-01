import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contactsSlice';
import { contactsSelector, filterSelector } from 'redux/selectors';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filterValue = useSelector(state => filterSelector(state).toLowerCase().trim());
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
    toast.info(`The contact has been deleted!`);
    return;
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" id={contact.id} onClick={handleDeleteContact}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
