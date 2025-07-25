import './style.scss';
import Filter from '../Filter/Filter';
import { openModal } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const Controls = () => {
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(openModal());
    }

    return (
        <div className='controls'>
            <Filter/>
            <button 
                className='add-task-btn'
                onClick={handleAddTask}
            >
                Добавить задачу
            </button>
        </div>
    );
}

export default Controls;