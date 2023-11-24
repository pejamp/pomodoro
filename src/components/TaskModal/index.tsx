import { useRef, useEffect } from "react";
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

export function TaskModal({ openModal, closeModal }: ITaskModal) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <ContainerModal ref={ref} onCancel={closeModal}>
      <Form>
        <div>
          <LabelStyled>
            Task:
            <InputTask
              type="text"
              name="task"
              placeholder="What are you working on?"
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
              />
              <ButtonCount aria-label="Increase Pomodoros">
                <IoIosArrowUp />
              </ButtonCount>
              <ButtonCount aria-label="Decrease Pomodoros">
                <IoIosArrowDown />
              </ButtonCount>
            </div>
          </LabelStyled>
        </div>
        <ControlModal>
          <ControlButton type="button" onClick={closeModal}>Cancel</ControlButton>
          <ControlButtonBg>Save</ControlButtonBg>
        </ControlModal>
      </Form>
    </ContainerModal>
  );
}
