import css from './IncomeRow.module.css';

interface IncomeRowProps {
  type: string;
  title: string;
  spent: string;
}

const IncomeRow = ({ type, title, spent }: IncomeRowProps) => {
  const getBadgeConfig = (type: string) => {
    switch (type) {
      case 'income':
        return { label: 'Income', className: css.badgeIncome };
      case 'expense':
        return { label: 'Expense', className: css.badgeExpense };
      case 'error':
        return { label: 'Error', className: css.badgeError };
      default:
        return { label: type, className: '' };
    }
  };

  const badge = getBadgeConfig(type);
  const isPositive = spent.startsWith('+');
  const isError = type === 'error';

  return (
    <tr className={css.row}>
      <td className={css.badgeCell}>
        <span className={`${css.badge} ${badge.className}`}>{badge.label}</span>
      </td>

      <td className={css.messageCell}>{title}</td>

      <td
        className={`${css.spentCell} ${isPositive ? css.positive : css.negative} ${
          isError ? css.lineThrough : ''
        }`}
      >
        {spent}
      </td>
    </tr>
  );
};

export default IncomeRow;
