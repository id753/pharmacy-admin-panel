import css from './ProductRow.module.css';

interface ProductRowProps {
  name: string;
  category: string;
  stock: number;
  suppliers: string;
  price: string;
}

const ProductRow = ({
  name,
  category,
  stock,
  suppliers,
  price,
}: ProductRowProps) => {
  return (
    <tr className={css.row}>
      <td>{name}</td>
      <td>{category}</td>
      <td>{stock}</td>
      <td>{suppliers}</td>
      <td>{price}</td>
      <td>
        <div className={css.buttonContainer}>
          <button type="button" className={css.editButton}>
            <svg className={css.editIcon} width="16" height="16">
              <use href="/symbol-defs.svg#icon-edit" />
            </svg>
          </button>
          <button type="button" className={css.deleteButton}>
            <svg className={css.deleteIcon} width="16" height="16">
              <use href="/symbol-defs.svg#icon-delete" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
