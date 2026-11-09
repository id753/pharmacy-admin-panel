import css from './CustomerRow.module.css';

interface CustomerRowProps {
  name: string;
  email: string;
  spent: string;
  avatar: string;
}

const CustomerRow = ({ name, email, spent, avatar }: CustomerRowProps) => {
  return (
    <tr className={css.row}>
      <td className={css.cell}>
        <div className={css.nameCell}>
          <img src={avatar} alt={name} className={css.avatar} />
          <span className={css.name}>{name}</span>
        </div>
      </td>
      <td className={css.email}>{email}</td>
      <td className={css.spent}>{spent}</td>
    </tr>
  );
};

export default CustomerRow;
