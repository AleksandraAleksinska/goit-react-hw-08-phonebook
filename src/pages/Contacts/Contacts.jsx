import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchingFilter from 'components/SearchingFilter/SearchingFilter';
import css from './Contacts.module.css';
import React from 'react';

const Contacts = () => {
  return (
    <div className={css.contacts}>
        <ContactForm/>
        <SearchingFilter/>
        <ContactList />
    </div>
  )
}

export default Contacts