import { PiX } from "react-icons/pi"
import { ButtonStyles, CheckboxControl, Container, Flex, TextStyles } from "./Task";

export function Task() {
  return (
    <Container>
      <CheckboxControl>
        <input type="checkbox" name="f" />
        <TextStyles>Task</TextStyles>
      </CheckboxControl>
      <Flex>
        <TextStyles>1/4</TextStyles>
        <ButtonStyles>
          <PiX />
        </ButtonStyles>
      </Flex>
    </Container>
  )
}