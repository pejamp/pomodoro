import { ReactSVG } from "react-svg";
import { ButtonStyles } from "./styled/ButtonStyles";
import { TimeStyles } from "./styled/TimeStyles";
import { TimerStyles } from "./styled/TimerStyles";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../utils/formatTime";

export function Timer() {
  const [seconds, setSeconds] = useState(5)
  const [started, setStarted] = useState(false);
  const intervalRef = useRef(0)

  function handleStartTime() {
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(intervalRef.current);
          setStarted(false)
          return prevSeconds
        }
        return prevSeconds - 1;
      });
    }, 1000)
    
    return () => clearInterval(intervalRef.current);
  }

  function handlePauseTime() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (started) {
      handleStartTime()
    } else {
      handlePauseTime()
    }
  }, [started])

  return (
    <TimerStyles>
      <TimeStyles>{formatTime(seconds)}</TimeStyles>
      {started ? (
        <ButtonStyles onClick={() => setStarted(false)}>
          Pause
          <ReactSVG src="/src/assets/ph_pause.svg" />
        </ButtonStyles>
      ) : (
        <ButtonStyles onClick={() => setStarted(true)}>
          Play
          <ReactSVG src="/src/assets/ph_play-bold.svg" />
        </ButtonStyles>
      )
      }
    </TimerStyles>
  )
}
