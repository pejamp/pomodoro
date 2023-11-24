import { useState } from 'react'
import { TaskModal } from "./components/TaskModal"
import { Tasks } from "./components/Tasks"
import { Timer } from "./components/Timer"
import { Default } from "./layout/Default"
import { GlobalStyle } from "./styles/globalStyle"

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Default>
        <Timer />
        <Tasks openModal={() => setModal(true)} />
        <TaskModal openModal={modal} closeModal={() => setModal(false)} />
      </Default>
      <GlobalStyle />
    </>
  )
}

export default App
