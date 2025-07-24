import './style.scss';
import { useDispatch } from "react-redux";
import { setStatus } from "../../store/slices/tasksSlice";

type StatusDropdownProps = {
    id: string
    status: string
}

const StatusDropdown = ({id, status}: StatusDropdownProps) => {
    const dispatch = useDispatch();

    return (
      <div className="status-dropdown">
        <label className='label' htmlFor="status-select">Статус:</label>
        <select
          id="status-select"
          value={status}
          onChange={(e) => dispatch(setStatus({taskId: id, status: e.target.value}))}
          className="dropdown-select"
        >
          <option value="pending">Ожидает</option>
          <option value="in-progress">В процессе</option>
          <option value="done">Завершено</option>
        </select>
      </div>
    );
};

export default StatusDropdown;