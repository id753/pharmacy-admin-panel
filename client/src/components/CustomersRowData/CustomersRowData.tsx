import css from './CustomersRowData.module.css';

export interface CustomerRowProps {
  id?: number;
  name: string;
  avatar: string;
  address: string;
  email: string;
  phone: string;
  dateRegister: string;
}

const CustomersRowData = ({
  name,
  avatar,
  address,
  email,
  phone,
  dateRegister,
}: CustomerRowProps) => {
  return (
    <tr className={css.row}>
      <td className={css.cell}>
        <div className={css.nameCell}>
          <img src={avatar} alt={name} className={css.avatar} />
          <span className={css.name}>{name}</span>
        </div>
      </td>
      <td className={css.email}>{email}</td>
      <td className={css.address}>{address}</td>

      <td className={css.phone}>{phone}</td>
      <td className={css.dateRegister}>{dateRegister}</td>
    </tr>
  );
};

export default CustomersRowData;
