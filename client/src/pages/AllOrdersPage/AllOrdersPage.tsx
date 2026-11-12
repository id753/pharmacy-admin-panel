import { useState } from 'react';
import AllOrders from '../../components/AllOrders/AllOrders';
import FilterForm from '../../components/FilterForm/FilterForm';
import css from './AllOrdersPage.module.css';

const AllOrdersPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div className={css.container}>
      <FilterForm
        placeholder="User Name"
        onFilter={(filterQuery) => setFilterQuery(filterQuery)}
        // onFilter={setFilterQuery}
      />

      <AllOrders filterQuery={filterQuery} />
    </div>
  );
};

export default AllOrdersPage;
