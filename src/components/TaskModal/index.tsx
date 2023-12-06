import { useRef, useEffect, FormEvent, useState, ChangeEvent } from "react";
import {
  ButtonCount,
  ContainerModal,
  ControlButton,
  ControlButtonBg,
  ControlModal,
  Form,
  InputNumber,
  InputTask,
  LabelStyled,
} from "./TaskModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface ITaskModal {
  openModal: boolean;
  closeModal: () => void;
}

interface ITask {
  task: string;
  pomodoros: number;
}

export function TaskModal({ openModal, closeModal }: ITaskModal) {
  const [newTask, setNewTask] = useState<ITask>({
    task: '',
    pomodoros: 1
  })
  const ref = useRef<HTMLDialogElement>(null);

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newTask.task.trim() === '') return;

    if (newTask.pomodoros === 0) return;

    console.log(newTask)

    setNewTask({
      task: '',
      pomodoros: 1
    })
  }
  
  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
  
    setNewTask((prevTask) => {
      return {
        ...prevTask,
        [fieldName]: fieldValue
      }
    })
  }

  function handlePomodoroCount(sumType: string) {
    setNewTask((prevTask) => {
      if (sumType === 'increase') {
        return {
          ...prevTask,
          pomodoros: prevTask.pomodoros + 1
        }
      } else {
        return {
          ...prevTask,
          pomodoros: Math.max(0, prevTask.pomodoros - 1)
        }
      }
    })
  }

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
      setNewTask({
        task: '',
        pomodoros: 1
      })
    }
  }, [openModal]);

  return (
    <ContainerModal ref={ref} onCancel={closeModal}>
      <Form onSubmit={handleAddNewTask}>
        <div>
          <LabelStyled>
            Task:
            <InputTask
              type="text"
              name="task"
              placeholder="What are you working on?"
              value={newTask.task}
              onChange={handleChangeNewTask}
            />
          </LabelStyled>
          <LabelStyled>
            Pomodoros:
            <div>
              <InputNumber
                type="number"
                name="pomodoros"
                placeholder="0"
                aria-label="Number of Pomodoros"
                value={newTask.pomodoros}
                onChange={handleChangeNewTask}
              />
              <ButtonCount type="button" onClick={() => handlePomodoroCount('increase')} aria-label="Increase Pomodoros">
                <IoIosArrowUp />
              </ButtonCount>
              <ButtonCount type="button" onClick={() => handlePomodoroCount('decrease')} aria-label="Decrease Pomodoros">
                <IoIosArrowDown />
              </ButtonCount>
            </div>
          </LabelStyled>
        </div>
        <ControlModal>
          <ControlButton type="button" onClick={closeModal}>Cancel</ControlButton>
          <ControlButtonBg type="submit">Save</ControlButtonBg>
        </ControlModal>
      </Form>
    </ContainerModal>
  );
}
