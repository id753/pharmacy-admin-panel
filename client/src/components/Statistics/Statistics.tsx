import StatCard from '../StatCard/StatCard';
import css from './Statistics.module.css';

const statsData = [
  {
    id: 1,
    title: 'All products',
    value: '8,430',
    icon: 'icon-allProducts',
    isActive: true,
  },
  {
    id: 2,
    title: 'All suppliers',
    value: '211',
    icon: 'icon-allSuppliers',
  },
  {
    id: 3,
    title: 'All customers',
    value: '140',
    icon: 'icon-allSuppliers',
  },
];

const Statistics = () => {
  return (
    <div className={css.statisticsList}>
      {statsData.map((item) => (
        <StatCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Statistics;
