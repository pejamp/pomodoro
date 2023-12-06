import { createContext, useState } from "react";

interface ITask {
  id: string;
  text: string;
  pomodoros: number;
}

interface TasksContextProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<TasksContextProps>({} as TasksContextProps);

export const TasksProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}