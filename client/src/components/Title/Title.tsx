import css from "./Title.module.css";

interface TitleProps {
  text: string;
}

// const Title = (props: TitleProps) => {
const Title = ({ text }: TitleProps) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default Title;
