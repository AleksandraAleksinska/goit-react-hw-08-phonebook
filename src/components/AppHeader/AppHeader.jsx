import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppHeader.module.css';

export const AppHeader = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {useAuth.isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};