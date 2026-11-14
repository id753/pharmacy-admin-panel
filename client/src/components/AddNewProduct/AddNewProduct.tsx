import css from './AddNewProduct.module.css';

interface AddNewProductProps {
  onOpen: () => void;
}

const AddNewProduct = ({ onOpen }: AddNewProductProps) => {
  return (
    <div className={css.containerBtn}>
      <button
        onClick={onOpen}
        type="button"
        title="Add a New Product"
        className={css.addBtn}
      >
        <svg className={css.addBtnIcon} width="13.5" height="13.5">
          <use href="/symbol-defs.svg#icon-plus" />
        </svg>
      </button>
      <span className={css.titleBtn}>Add a new product</span>
    </div>
  );
};

export default AddNewProduct;
