import './style.scss';
import { tasksSelector } from '../../store/slices/tasksSlice';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { filterSelector } from '../../store/slices/filterSlice';

const TasksList = () => {
    const tasksList  = useSelector(tasksSelector);
    const filter = useSelector(filterSelector);
    const content = filter === 'all' ? 
        (tasksList.map((task) => {
            return <Task key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} />
        })) 
        :
        (tasksList.filter(task => task.status === filter).map((task) => {
            return <Task key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} />
        }))

    return (
        <div className='tasks-list'>
            { tasksList.length === 0 ? 
                <p className='empty-list'>Список пуст</p>
                :
                content
            }
        </div>
    )
}

export default TasksList;