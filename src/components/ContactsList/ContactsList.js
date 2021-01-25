import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getIsLoading,
} from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);

  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {!isLoading && filteredContacts.length < 1 && (
        <p className={s.text}>Нет контактов</p>
      )}

      <ul className={s.contactsList}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, tel }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.phone}>
                <a href={`tel:+${tel.toString().replace(/[^\d;]/g, '')}`}>
                  {tel}
                </a>
              </span>
              <button
                className={s.btnDeleteContact}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
      {isLoading && <h3> Загрузка ...</h3>}
    </>
  );
}

ContactsList.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
