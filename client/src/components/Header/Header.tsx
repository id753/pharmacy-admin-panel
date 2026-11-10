import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import css from './Header.module.css';

const pageNames: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/products': 'Products',
  '/suppliers': 'Suppliers',
  '/orders': 'Orders',
  '/customers': 'Customers',
};

const Header = () => {
  const location = useLocation();
  const currentTitle = pageNames[location.pathname] || 'Dashboard';

  return (
    <header className={css.header}>
      <div className={css.headerLeft}>
        <Logo />
        <div className={css.infoWrapper}>
          <Title text="Medicine store" />
          <div className={css.subWrapper}>
            <Subtitle
              text={currentTitle}
              to="/dashboard"
              tooltip={`Go to Dashboard`}
            />
            <Subtitle text="vendor@gmail.com" />
          </div>
        </div>
      </div>
      <LogoutBtn />
    </header>
  );
};

export default Header;
