import { useState } from 'react';
import css from './ProductsPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import AllProducts from '../../components/AllProducts/AllProducts';

const ProductsPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div className={css.container}>
      <FilterForm
        placeholder="Product Name"
        onFilter={(filterQuery) => setFilterQuery(filterQuery)}
        // onFilter={setFilterQuery}
      />

      <AllProducts filterQuery={filterQuery} />
    </div>
  );
};

export default ProductsPage;
