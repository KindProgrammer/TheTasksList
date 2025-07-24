import './style.scss';
import { filterSelector } from '../../store/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../../store/slices/filterSlice';

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
      <div className="filter">
        <label className='label' htmlFor="filter-select">Фильтр:</label>
        <select
          id="filter-select"
          value={filter}
          onChange={(e) => dispatch(setStatus(e.target.value))}
          className="dropdown-select"
        >
          <option value="all">Все задачи</option>
          <option value="pending">Ожидают</option>
          <option value="in-progress">В процессе</option>
          <option value="done">Завершенные</option>
        </select>
      </div>
    );
  };

export default Filter;