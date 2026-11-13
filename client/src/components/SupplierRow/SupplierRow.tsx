import css from './SupplierRow.module.css';

type SupplierStatus = 'Active' | 'Deactive';

export interface SupplierRowProps {
  id?: number;
  name: string;
  address: string;
  amount: string;
  company: string;
  deliveryDate: string;
  status: SupplierStatus;
}

const SupplierRow = ({
  name,
  address,
  amount,
  company,
  deliveryDate,
  status,
}: SupplierRowProps) => {
  const getStatusClass = (status: SupplierStatus) => {
    switch (status.toLowerCase()) {
      case 'active':
        return css.statusActive;
      case 'deactive':
        return css.statusDeactive;
      default:
        return '';
    }
  };

  return (
    <tr className={css.row}>
      <td>{name}</td>
      <td>{address}</td>
      <td>{company}</td>
      <td>{deliveryDate}</td>
      <td>{amount}</td>

      <td className={css.badgeCell}>
        <span className={`${css.badge} ${getStatusClass(status)}`}>
          {status}
        </span>
      </td>

      <td>
        <button type="button" className={css.editButton}>
          <svg className={css.editIcon} width="11.5" height="11.5">
            <use href="/symbol-defs.svg#icon-edit" />
          </svg>
          <span>Edit</span>
        </button>
      </td>
    </tr>
  );
};

export default SupplierRow;
