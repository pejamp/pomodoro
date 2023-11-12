import { ReactSVG } from "react-svg";
import { BsCheckCircle } from 'react-icons/bs'
import { ButtonStyles, CheckboxControl, Container, Flex, TextStyles } from "./Task";

export function Task() {
  return (
    <Container>
      <Flex>
        <CheckboxControl>
          <input type="checkbox" name="f" />
        </CheckboxControl>
        <CheckboxControl>
          <input type="checkbox" name="t" checked />
        </CheckboxControl>
        <TextStyles>Task</TextStyles>
      </Flex>
      <Flex>
        <TextStyles>1/4</TextStyles>
        <ButtonStyles>
          <ReactSVG src="/src/assets/delete.svg" />
        </ButtonStyles>
      </Flex>
    </Container>
  )
}

/**
 * 
 * <ButtonStyles>
          <ReactSVG src="/src/assets/check-input.svg" />
        </ButtonStyles>
        <BsCheckCircle className="gradient-icon" />
 */