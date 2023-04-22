import { Item, Div, ContactName, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Div />
      <ContactName>{name}</ContactName>
      <p>{phone}</p>
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContacts(id));
          toast.success(`Contact ${name} deleted!`);
        }}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
