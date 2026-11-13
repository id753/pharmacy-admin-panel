import { useState } from 'react';
import css from './SuppliersPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import AllSuppliers from '../../components/AllSuppliers/AllSuppliers';

const SuppliersPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div className={css.container}>
      <FilterForm placeholder="User Name" onFilter={setFilterQuery} />

      <AllSuppliers filterQuery={filterQuery} />
    </div>
  );
};

export default SuppliersPage;
