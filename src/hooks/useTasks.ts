import { useContext } from "react"
import { TasksContext } from "../contexts/tasksContext"

export const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  function addTask(task: any) {
    setTasks([...tasks, task])
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return {
    addTask,
    deleteTask
  }
}