import { Container } from './styled/TasksStyles'
import { ButtonStyles } from './styled/ButtonStyles'
import { Task } from '../Task'

export function Tasks() {
  return (
    <Container>
      <Task />
      <ButtonStyles>add new task</ButtonStyles>
    </Container>
  )
}
