import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers';
import Statistics from '../../components/Statistics/Statistics';
import css from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={css.container}>
      <Statistics />
      <div className={css.subContainer}>
        <RecentCustomers />
        <IncomeExpenses />
      </div>
    </div>
  );
};

export default DashboardPage;
