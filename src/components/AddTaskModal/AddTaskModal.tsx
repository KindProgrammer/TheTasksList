import './style.scss';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Cross from '../../assets/cross.svg?react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/slices/modalSlice';

const AddTaskModal = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
    }

    return (
        <AnimatePresence>
            <motion.div 
                className="modal-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >  
                <motion.div 
                    className="modal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.span 
                        className="cross-container"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Cross 
                            className="cross" 
                            onClick={handleClose} 
                            aria-label="Close modal"
                        />
                    </motion.span>
                    <div className="modal-content">
                        <AddTaskForm />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AddTaskModal;