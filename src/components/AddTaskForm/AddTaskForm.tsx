import './style.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from '../../store/slices/tasksSlice';
import { addTask } from '../../store/slices/tasksSlice';

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(tasksSelector);
    const currentTasks = tasks.map(task => task.title.toLowerCase());

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Обязательное поле')
            .min(3, 'Минимум 3 символа')
            .max(30, 'Максимум 30 символов')
            .test(
                'unique-title',
                'Такая задача уже существует',
                (value) => {
                    const task = value.trim().toLowerCase();
                    console.log('Такая задача уже существует');
                    return !currentTasks?.includes(task);
                }
          ),
        description: Yup.string()
            .required('Обязательное поле')
            .max(200, 'Максимум 200 символов')
    });

    const formik = useFormik({
    initialValues: { title: '', description: ''},
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
        const title = values.title.trim();
        const description = values.description.trim();
        dispatch(addTask({id: title, title: title, description: description}));
        resetForm();
        setSubmitting(false);
    }
    });

    return (
        <div className='form-container'>
            <div className="title">Форма добавления задачи</div>
            <p className='clue-text'>Напишите название задачи и ее описание:</p>
            <form className='form' onSubmit={formik.handleSubmit}>

                <div className='input-container'>
                    <input 
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`input ${formik.touched.title && formik.errors.title ? 'input-error' : ''}`}
                        type="text"
                        name="title"
                        placeholder='Название задачи'
                    />
                    <p className="error-message">{formik.errors.title ?? String.fromCharCode(0x00A0)}</p>
                </div>

                <div className='input-container'>
                    <textarea 
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`input textarea ${formik.touched.description && formik.errors.description ? 'input-error' : ''}`}
                        name="description"
                        placeholder='Описание задачи'
                    />
                    <p className="error-message">{formik.errors.description ?? String.fromCharCode(0x00A0)}</p>
                </div>

                <button 
                    disabled={!formik.isValid || formik.isSubmitting}
                    className='btn'
                    type="submit"
                >
                    Добавить задачу
                </button>
            </form>
        </div>
    );
}

export default AddTaskForm;