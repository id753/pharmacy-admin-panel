import css from './CustomersPage.module.css';
import { useState } from 'react';
import AllCustomers from '../../components/AllCustomers/AllCustomers';
import FilterForm from '../../components/FilterForm/FilterForm';

const CustomersPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div className={css.container}>
      <FilterForm placeholder="User Name" onFilter={setFilterQuery} />

      <AllCustomers filteredQuery={filterQuery} />
    </div>
  );
};
export default CustomersPage;
