import ProductRow from '../ProductRow/ProductRow.tsx';
import css from './AllProducts.module.css';

interface AllProductsProps {
  filterQuery: string;
}
const productsData = [
  {
    id: 1,
    name: 'Antibiotic 250 mg',
    category: 'Medicine',
    stock: 11,
    suppliers: 'Beximco',
    price: '890.66',
  },
  {
    id: 2,
    name: 'Antibiotic 1250 mg',
    category: 'Medicine',
    stock: 111,
    suppliers: 'Bexco',
    price: '1890.66',
  },
  {
    id: 3,
    name: 'Antibiotic 250 mg',
    category: 'Medicine',
    stock: 11,
    suppliers: 'Beximco',
    price: '8910.66',
  },
];

const AllProducts = ({ filterQuery }: AllProductsProps) => {
  const filteredProducts = productsData.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
  );
  return (
    <div className={css.container}>
      <h2 className={css.title}>All products</h2>
      <table className={css.table}>
        <thead>
          <tr className={css.headerRow}>
            <th>Product Info</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Suppliers</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((item) => {
            return <ProductRow key={item.id} {...item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
