import { useForm, type SubmitHandler } from 'react-hook-form';
import css from './FilterForm.module.css';

interface FilterInputs {
  searchQuery: string;
}

interface FilterFormProps {
  placeholder: string;
  onFilter: (query: string) => void;
}

const FilterForm = ({ placeholder, onFilter }: FilterFormProps) => {
  const { register, handleSubmit } = useForm<FilterInputs>();

  // const onSubmit: SubmitHandler<FilterInputs> = (data) => {
  const onSubmit = (data: FilterInputs) => {
    onFilter(data.searchQuery.trim());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
      <input
        type="text"
        placeholder={placeholder}
        {...register('searchQuery')}
        className={css.input}
      />
      <button type="submit" title="Logout" className={css.button}>
        <svg className={css.filterIcon} width="13" height="12">
          <use href="/symbol-defs.svg#icon-filter" />
        </svg>
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
