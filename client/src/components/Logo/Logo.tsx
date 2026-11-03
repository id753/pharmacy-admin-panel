import { Link } from 'react-router-dom';
import css from './Logo.module.css';
import logoImage from '../../assets/logo.png';

const Logo = () => {
  return (
    <Link to="/login" className={css.logoLink} title="E-Pharmacy Home">
      <img src={logoImage} alt="E-Pharmacy Logo" className={css.logoImg} />
    </Link>
  );
};

export default Logo;
