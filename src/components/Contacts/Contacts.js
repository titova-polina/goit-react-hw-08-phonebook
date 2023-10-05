import { useDispatch, useSelector } from 'react-redux';
import { Item, Btn } from './Contacts.styled';
import { getFilter, getIsDeleting, getItems } from 'redux/tasks/selectors';
import { deleteContacts } from 'redux/tasks/operation';
export const Contacts = () => {
  const contacts = useSelector(getItems);
  const search = useSelector(getFilter);
  const isDeleting = useSelector(getIsDeleting);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(
    contact =>
      !search ||
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search)
  );

  return (
    <>
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn
              onClick={() => dispatch(deleteContacts(contact.id))}
              disabled={isDeleting}
            >
              {isDeleting === contact.id ? '...deleting' : 'Delete'}
            </Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};
