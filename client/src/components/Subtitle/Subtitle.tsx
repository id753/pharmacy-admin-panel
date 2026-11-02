import { Link } from "react-router-dom";
import css from "./Subtitle.module.css";

interface SubtitleProps {
  text: string;
  to?: string;
}
const Subtitle = ({ text, to }: SubtitleProps) => {
  if (to) {
    return (
      <Link to={to} className={css.link}>
        {text}
      </Link>
    );
  }
  return <span className={css.text}>{text}</span>;
};

export default Subtitle;
