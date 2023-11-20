import {
  ButtonCount,
  ContainerModal,
  ControlButton,
  ControlButtonBg,
  ControlModal,
  InputNumber,
  InputTask,
  LabelStyled,
  Overlay,
} from "./TaskModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function TaskModal() {
  return (
    <>
      <Overlay></Overlay>
      <ContainerModal open>
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
          <ControlButton>Cancel</ControlButton>
          <ControlButtonBg>Save</ControlButtonBg>
        </ControlModal>
      </ContainerModal>
    </>
  );
}
