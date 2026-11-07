import React from 'react';
import css from './StatCard.module.css';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  isActive?: boolean;
}

const StatCard = ({ icon, title, value, isActive = false }: StatCardProps) => {
  return (
    <div className={`${css.card} ${isActive ? css.active : ''}`}>
      <div className={css.header}>
        <span className={css.icon}>
          <svg className={css.iconSvg}>
            <use href={`/symbol-defs.svg#${icon}`} />
          </svg>
        </span>
        <span className={css.title}>{title}</span>
      </div>
      <div className={css.value}>{value}</div>
    </div>
  );
};

export default StatCard;
