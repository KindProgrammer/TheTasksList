import './style.scss';
import { removeTask } from '../../store/slices/tasksSlice';
import { useDispatch } from 'react-redux';
import StatusDropdown from '../StatusDropdown/StatusDropdown';

export type TaskProps = {
    id: string
    title: string;
    description: string;
    status: string
  };

const Task = ({id, title, description, status}: TaskProps) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTask(id))
    }


    return (
        <div className={`task ${status}`}>
            <div className='title-container'>
                <div className='title'>
                    {title}
                </div>
                <StatusDropdown id={id} status={status} />
            </div>
            <div className='description'>
                {description}
            </div>
            <div className='btn-container'>
                <button className='btn' onClick={handleRemove}>Удалить</button>
            </div>
        </div>
    );
}

export default Task;