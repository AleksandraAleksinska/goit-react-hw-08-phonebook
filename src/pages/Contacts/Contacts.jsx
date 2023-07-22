import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchingFilter from 'components/SearchingFilter/SearchingFilter';
import { Fragment } from 'react';
import React from 'react';

const Contacts = () => {
  return (
    <Fragment>
        <ContactForm/>
        <SearchingFilter/>
        <ContactList />
    </Fragment>
  )
}

export default Contacts