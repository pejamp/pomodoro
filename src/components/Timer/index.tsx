import { ReactSVG } from "react-svg";
import { ButtonStyles } from "./styled/ButtonStyles";
import { TimeStyles } from "./styled/TimeStyles";
import { TimerStyles } from "./styled/TimerStyles";

export function Timer() {
  return (
    <TimerStyles>
      <TimeStyles>25:00</TimeStyles>
      <ButtonStyles>
        Play
        <ReactSVG src="/src/assets/ph_play-bold.svg" />
      </ButtonStyles>
    </TimerStyles>
  )
}
