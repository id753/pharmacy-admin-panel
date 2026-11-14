import css from './AddNewSupplier.module.css';

interface AddNewSupplierProps {
  onOpen: () => void;
}

const AddNewSupplier = ({ onOpen }: AddNewSupplierProps) => {
  return (
    <button onClick={onOpen} type="button" className={css.addBtn}>
      Add a new suppliers
    </button>
  );
};

export default AddNewSupplier;
