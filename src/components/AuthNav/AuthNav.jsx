import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)} to="/register">
        Register
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;