import OrderRow, { type OrderRowProps } from '../OrderRow/OrderRow';
import css from './AllOrders.module.css';

const ordersData: OrderRowProps[] = [
  {
    id: 1,
    name: 'Alex Shatov',
    avatar: '/images/customers/alex.jpg',
    address: 'Dhonmondi',
    products: 11,
    orderDate: 'July 31, 2023',
    price: '890.66',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Alex Shatov',
    avatar: '/images/customers/alex.jpg',
    address: 'Dhonmondi',
    products: 11,
    orderDate: 'July 31, 2023',
    price: '890.66',
    status: 'Cancelled',
  },
  {
    id: 3,
    name: 'Philip Harbach',
    avatar: '/images/customers/alex.jpg',
    address: 'Dhonmondi',
    products: 11,
    orderDate: 'July 31, 2023',
    price: '890.66',
    status: 'Processing',
  },
  {
    id: 4,
    name: 'Alex Shatov',
    avatar: '/images/customers/alex.jpg',
    address: 'Dhonmondi',
    products: 11,
    orderDate: 'July 31, 2023',
    price: '890.66',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'Philip Harbach',
    avatar: '/images/customers/alex.jpg',
    address: 'Dhonmondi',
    products: 11,
    orderDate: 'July 31, 2023',
    price: '890.66',
    status: 'Confirmed',
  },
];
const AllOrders = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>All orders</h2>
      <table className={css.table}>
        <thead>
          <tr className={css.headerRow}>
            <th>User Info</th>
            <th>Address</th>
            <th>Products</th>
            <th>Order date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((item) => (
            <OrderRow
              key={item.id}
              name={item.name}
              avatar={item.avatar}
              address={item.address}
              products={item.products}
              orderDate={item.orderDate}
              price={item.price}
              status={item.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
