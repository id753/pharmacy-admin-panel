import Logo from '../Logo/Logo';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerLeft}>
        <Logo />
        <div className={css.infoWrapper}>
          <Title text="Medicine store" />
          <div className={css.subWrapper}>
            <Subtitle text="Dashboard" to="/dashboard" />
            <Subtitle text="vendor@gmail.com" />
          </div>
        </div>
      </div>
      <LogoutBtn />
    </header>
  );
};

export default Header;
