// import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from '../pages/ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import SearchingFilter from './SearchingFilter/SearchingFilter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import { RegisterForm } from '../pages/RegisterForm/RegisterForm';
import { LoginForm } from '../pages/LoginForm/LoginForm';



const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (

    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='contacts' element={<ContactForm />} />
        </Route>
      </Routes>
    </div>




    // <Fragment>
    //   <h2>Phonebook</h2>
    //   <ContactForm  />
    //   <h2>Contacts</h2>
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <SearchingFilter />
    //   <ContactList /> 
    // </Fragment>
  )
};
 
export default App;

