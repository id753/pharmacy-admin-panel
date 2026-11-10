import IncomeRow from '../IncomeRow/IncomeRow';
import css from './IncomeExpenses.module.css';

const IncomeData = [
  {
    id: 1,
    type: 'expense',
    title: 'Qonto billing',
    spent: '-49.88',
  },
  {
    id: 2,
    type: 'income',
    title: 'Cruip.com Market Ltd 70 Wilson St London',
    spent: '+249.88',
  },
  {
    id: 3,
    type: 'income',
    title: 'Notion Labs Inc',
    spent: '+99.99',
  },
  {
    id: 4,
    type: 'income',
    title: 'Market Cap Ltd',
    spent: '+1,200.88',
  },
  {
    id: 5,
    type: 'error',
    title: 'App.com Market Ltd 70 Wilson St London',
    spent: '+99.99',
  },
  {
    id: 6,
    type: 'expense',
    title: 'App.com Market Ltd 70 Wilson St London',
    spent: '-49.88',
  },
];

const IncomeExpenses = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Income/Expenses</h3>

      <p className={css.sectionDate}>Today</p>

      <table className={css.table}>
        <tbody>
          {IncomeData.map((item) => (
            <IncomeRow
              key={item.id}
              type={item.type}
              title={item.title}
              spent={item.spent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpenses;
