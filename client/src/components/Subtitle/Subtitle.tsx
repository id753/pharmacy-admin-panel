import { Link } from 'react-router-dom';
import css from './Subtitle.module.css';

interface SubtitleProps {
  text: string;
  to?: string;
  tooltip?: string;
}
const Subtitle = ({ text, to, tooltip }: SubtitleProps) => {
  if (to) {
    return (
      <Link to={to} title={tooltip} className={css.link}>
        {text}
      </Link>
    );
  }
  return <span className={css.text}>{text}</span>;
};

export default Subtitle;
