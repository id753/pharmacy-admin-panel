import AllOrders from '../../components/AllOrders/AllOrders';
import UsernameFilter from '../../components/UsernameFilter/UsernameFilter';
import css from './AllOrdersPage.module.css';

const AllOrdersPage = () => {
  return (
    <div className={css.container}>
      <UsernameFilter />
      <AllOrders />
    </div>
  );
};

export default AllOrdersPage;
