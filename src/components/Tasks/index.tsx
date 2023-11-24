import { Container } from './styled/TasksStyles'
import { ButtonStyles } from './styled/ButtonStyles'
import { Task } from '../Task'

interface ITasks {
  openModal: () => void;
}

export function Tasks({ openModal }: ITasks) {

  return (
    <Container>
      <Task />
      <ButtonStyles onClick={openModal}>add new task</ButtonStyles>
    </Container>
  )
}
