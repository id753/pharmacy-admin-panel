import { useState } from 'react';
import css from './SuppliersPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import AllSuppliers from '../../components/AllSuppliers/AllSuppliers';
import AddNewSupplier from '../../components/AddNewSupplier/AddNewSupplier';
import ProductModal from '../../components/ProductModal/ProductModal';

const SuppliersPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <FilterForm placeholder="User Name" onFilter={setFilterQuery} />
        <AddNewSupplier onOpen={handleOpenModal} />
      </div>

      <AllSuppliers filterQuery={filterQuery} />

      {isModalOpen && <ProductModal onClose={handleCloseModal} />}
    </div>
  );
};

export default SuppliersPage;
