import React, { Fragment } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import SearchingFilter from 'components/SearchingFilter/SearchingFilter';
import ContactList from 'components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';



const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

   
    if (contacts.some((contact) => contact.name === form.elements.name.value)) {
      alert(form.elements.name.value + ' is already in contacts');
      } 
      else {
        const name = form.elements.name.value;
        const phone = form.elements.number.value;
      dispatch(addContact({ name, phone }))       
      }
    form.reset();
  }

  return (
    <Fragment>
    <form className={css.form} onSubmit={handleSubmit}>        
         <label className={css.formLabel}>
           Name 
           <input
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
           />
         </label>
         <label className={css.formLabel}>
           Number 
           <input 
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
         </label>
         <button className={css.formButton}type='submit'>Add contact</button>
       </form>
       {isLoading && !error && <b>Request in progress...</b>}
       <SearchingFilter />
       <ContactList />
       </Fragment>
  )
}

export default ContactForm
