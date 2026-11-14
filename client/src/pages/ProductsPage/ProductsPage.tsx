import { useState } from 'react';
import css from './ProductsPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import AllProducts from '../../components/AllProducts/AllProducts';
import AddNewProduct from '../../components/AddNewProduct/AddNewProduct';
import ProductModal from '../../components/ProductModal/ProductModal';

const ProductsPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <FilterForm
          placeholder="Product Name"
          onFilter={(filterQuery) => setFilterQuery(filterQuery)}
        />
        <AddNewProduct onOpen={handleOpenModal} />
      </div>

      <AllProducts filterQuery={filterQuery} />

      {isModalOpen && <ProductModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductsPage;
