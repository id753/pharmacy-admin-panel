import SupplierRow, { type SupplierRowProps } from '../SupplierRow/SupplierRow';
import css from './AllSuppliers.module.css';

interface AllSuppliersProps {
  filterQuery: string;
}

const suppliersData: SupplierRowProps[] = [
  {
    id: 1,
    name: 'Mirko Fisuk',
    address: 'Medicine',
    amount: '11',
    company: 'Beximco',
    deliveryDate: 'August 1, 2023',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Mirko Fisuk',
    address: 'Medicine',
    amount: '8527.58',
    company: 'Beximco',
    deliveryDate: 'August 1, 2023',
    status: 'Deactive',
  },
  {
    id: 3,
    name: 'Mirko Fisuk',
    address: 'Medicine',
    amount: '11',
    company: 'Beximco',
    deliveryDate: 'August 11, 2023',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Mirko Fisuk',
    address: 'Medicine',
    amount: '8527.58',
    company: 'Beximco',
    deliveryDate: 'August 1, 2003',
    status: 'Deactive',
  },
];

const AllSuppliers = ({ filterQuery }: AllSuppliersProps) => {
  const filteredSuppliers = suppliersData.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h2 className={css.title}>All suppliers</h2>
      <table className={css.table}>
        <thead>
          <tr className={css.headerRow}>
            <th>Suppliers Info</th>
            <th>Address</th>
            <th>Company</th>
            <th>Delivery date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredSuppliers.map((item) => (
            <SupplierRow key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSuppliers;
