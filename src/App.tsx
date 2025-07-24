import './App.css'
import TasksList from './components/TasksList/TasksList'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import Filter from './components/Filter/Filter'

function App() {
  return (
    <>
      <AddTaskForm/>
      <Filter/>
      <TasksList/>
    </>
  )
}

export default App
