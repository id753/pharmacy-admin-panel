import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers';
import Statistics from '../../components/Statistics/Statistics';
import css from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={css.container}>
      <Statistics />
      <RecentCustomers />
      <IncomeExpenses />
    </div>
  );
};

export default DashboardPage;
