import './style.scss';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Cross from '../../assets/cross.svg?react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/slices/modalSlice';
import { useState } from 'react';

const AddTaskModal = () => {
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {dispatch(closeModal())}, 500)
    }

    return (
        <AnimatePresence mode='wait'>{
            isVisible && (
                <motion.div 
                className="modal-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >  
                <motion.div 
                    className="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
            )
        }
        </AnimatePresence>
    );
}

export default AddTaskModal;