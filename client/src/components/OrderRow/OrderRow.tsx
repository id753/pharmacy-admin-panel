import css from './OrderRow.module.css';

export type OrderStatus =
  | 'Completed'
  | 'Confirmed'
  | 'Pending'
  | 'Cancelled'
  | 'Processing';

export interface OrderRowProps {
  id?: number;
  name: string;
  avatar: string;
  address: string;
  products: number;
  orderDate: string;
  price: string;
  status: OrderStatus;
}

const OrderRow = ({
  name,
  avatar,
  address,
  products,
  orderDate,
  price,
  status,
}: OrderRowProps) => {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return css.statusCompleted;
      case 'confirmed':
        return css.statusConfirmed;
      case 'pending':
        return css.statusPending;
      case 'cancelled':
        return css.statusCancelled;
      case 'processing':
        return css.statusProcessing;
      default:
        return '';
    }
  };
  return (
    <tr className={css.row}>
      <td className={css.cell}>
        <div className={css.nameCell}>
          <img src={avatar} alt={name} className={css.avatar} />
          <span className={css.name}>{name}</span>
        </div>
      </td>
      <td className={css.address}>{address}</td>
      <td className={css.products}>{products}</td>
      <td className={css.orderDate}>{orderDate}</td>
      <td className={css.spepricent}>{price}</td>

      <td className={css.badgeCell}>
        <span className={`${css.badge} ${getStatusClass(status)}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default OrderRow;
