import CustomersRowData from '../CustomersRowData/CustomersRowData';
import css from './AllCustomers.module.css';

interface AllCustomersProps {
  filteredQuery: string;
}

const customersData = [
  {
    id: 1,
    name: 'Mirko Fisuk',
    email: 'Mirko@fgfg.ff',
    avatar: '/images/customers/alex.jpg',
    address: 'Medicine',
    phone: '+1245454545',
    dateRegister: 'Aug 1, 2023',
  },
  {
    id: 2,
    name: 'Mirko Fisuk',
    email: 'Mirko@fgfg.ff',
    address: 'Medicine',
    phone: '+1244554545',
    avatar: '/images/customers/alex.jpg',
    dateRegister: 'Aug 1, 2013',
  },
  {
    id: 3,
    name: 'Mirko Fisuk',
    email: 'Mirko@fgfg.ff',
    address: 'Medicine',
    phone: '+1245454545',
    avatar: '/images/customers/alex.jpg',
    dateRegister: 'Aug 1, 2023',
  },
  {
    id: 5,
    name: 'Mirko Fisuk',
    email: 'Mirko@fgfg.ff',
    address: 'Medicine',
    avatar: '/images/customers/alex.jpg',
    phone: '+1245454545',
    dateRegister: 'Aug 1, 2023',
  },
  {
    id: 4,
    name: 'Mirko Fisuk',
    email: 'Mirko@fgfg.ff',
    avatar: '/images/customers/alex.jpg',
    address: 'Medicine',
    phone: '+1245454545',
    dateRegister: 'Aug 1, 2023',
  },
];

const AllCustomers = ({ filteredQuery }: AllCustomersProps) => {
  const filteredCustomers = customersData.filter((item) =>
    item.name.toLowerCase().includes(filteredQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h2 className={css.title}>Customers Data</h2>
      <table className={css.table}>
        <thead>
          <tr className={css.headerRow}>
            <th>User Info</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Register date</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.map((item) => (
            <CustomersRowData
              key={item.id}
              name={item.name}
              email={item.email}
              address={item.address}
              avatar={item.avatar}
              phone={item.phone}
              dateRegister={item.dateRegister}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCustomers;
