import CustomerRow from '../CustomerRow/CustomerRow';
import css from './RecentCustomers.module.css';

const customersData = [
  {
    id: 1,
    name: 'Alex Shatov',
    email: 'alexshatov@gmail.com',
    spent: '2,890.66',
    avatar: '/images/customers/alex.jpg',
  },
  {
    id: 2,
    name: 'Alex Shatov',
    email: 'alexshatov@gmail.com',
    spent: '2,890.66',
    avatar: '/images/customers/alex.jpg',
  },
  {
    id: 3,
    name: 'Alex Shatov',
    email: 'alexshatov@gmail.com',
    spent: '2,890.66',
    avatar: '/images/customers/alex.jpg',
  },
  {
    id: 4,
    name: 'Alex Shatov',
    email: 'alexshatov@gmail.com',
    spent: '2,890.66',
    avatar: '/images/customers/alex.jpg',
  },
  {
    id: 5,
    name: 'Alex Shatov',
    email: 'alexshatov@gmail.com',
    spent: '2,890.66',
    avatar: '/images/customers/alex.jpg',
  },
];

const RecentCustomers = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Recent Customers</h3>
      <table className={css.table}>
        <thead>
          <tr className={css.headerRow}>
            <th>Name</th>
            <th>Email</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((item) => (
            <CustomerRow
              key={item.id}
              name={item.name}
              email={item.email}
              spent={item.spent}
              avatar={item.avatar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;
