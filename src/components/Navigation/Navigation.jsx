import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
      <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)}to="/contacts">
          Contacts
      </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
