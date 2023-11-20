import { TaskModal } from "./components/TaskModal"
import { Tasks } from "./components/Tasks"
import { Timer } from "./components/Timer"
import { Default } from "./layout/Default"
import { GlobalStyle } from "./styles/globalStyle"

function App() {

  return (
    <>
      <Default>
        <Timer />
        <Tasks />
      </Default>
      <GlobalStyle />
    </>
  )
}

export default App
