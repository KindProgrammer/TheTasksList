import './App.css'
import TasksList from './components/TasksList/TasksList'
import Controls from './components/Controls/Controls'
import AddTaskModal from './components/AddTaskModal/AddTaskModal'
import { isOpenedSelector } from './store/slices/modalSlice'
import { useSelector } from 'react-redux'

function App() {
  const isOpen = useSelector(isOpenedSelector);

  return (
    <>
      <Controls />
      <TasksList/>
      { isOpen ? <AddTaskModal/> : null }
    </>
  )
}

export default App
